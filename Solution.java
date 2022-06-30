
import java.util.Arrays;

class Solution {

    public int maxBoxesInWarehouse(int[] boxes, int[] warehouse) {

        //alternatively, in-place: warehouse[i] = Math.min(warehouse[i - 1], warehouse[i]);
        int[] smallestRoomFromEntrance = new int[warehouse.length];
        smallestRoomFromEntrance[0] = warehouse[0];
        for (int i = 1; i < warehouse.length; ++i) {
            smallestRoomFromEntrance[i] = Math.min(smallestRoomFromEntrance[i - 1], warehouse[i]);
        }

        Arrays.sort(boxes);
        int indexBoxes = 0;
        int indexWarehouseRooms = warehouse.length - 1;
        int countStoredBoxes = 0;

        while (indexBoxes < boxes.length && indexWarehouseRooms >= 0) {
            if (boxes[indexBoxes] <= smallestRoomFromEntrance[indexWarehouseRooms]) {
                ++indexBoxes;
                ++countStoredBoxes;
            }
            --indexWarehouseRooms;
        }
        return countStoredBoxes;
    }
}
