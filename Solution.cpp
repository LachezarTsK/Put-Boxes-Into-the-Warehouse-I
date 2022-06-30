
#include <vector>
using namespace std;

class Solution {
    
public:
    int maxBoxesInWarehouse(vector<int>& boxes, vector<int>& warehouse) {

        //alternatively, in-place: warehouse[i] = Math.min(warehouse[i - 1], warehouse[i]);
        vector<int> smallestRoomFromEntrance(warehouse.size());
        smallestRoomFromEntrance[0] = warehouse[0];
        for (int i = 1; i < warehouse.size(); ++i) {
            smallestRoomFromEntrance[i] = min(smallestRoomFromEntrance[i - 1], warehouse[i]);
        }

        sort(boxes.begin(), boxes.end());
        int indexBoxes = 0;
        int indexWarehouseRooms = warehouse.size() - 1;
        int countStoredBoxes = 0;

        while (indexBoxes < boxes.size() && indexWarehouseRooms >= 0) {
            if (boxes[indexBoxes] <= smallestRoomFromEntrance[indexWarehouseRooms]) {
                ++indexBoxes;
                ++countStoredBoxes;
            }
            --indexWarehouseRooms;
        }
        return countStoredBoxes;
    }
};
