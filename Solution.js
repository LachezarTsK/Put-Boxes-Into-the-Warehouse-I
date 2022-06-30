
/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function (boxes, warehouse) {

    //alternatively, in-place: warehouse[i] = Math.min(warehouse[i - 1], warehouse[i]);
    const smallestRoomFromEntrance = new Array(warehouse.length).fill(0);
    smallestRoomFromEntrance[0] = warehouse[0];
    for (let i = 1; i < warehouse.length; ++i) {
        smallestRoomFromEntrance[i] = Math.min(smallestRoomFromEntrance[i - 1], warehouse[i]);
    }

    boxes.sort((x, y) => x - y);
    let indexBoxes = 0;
    let indexWarehouseRooms = warehouse.length - 1;
    let countStoredBoxes = 0;

    while (indexBoxes < boxes.length && indexWarehouseRooms >= 0) {
        if (boxes[indexBoxes] <= smallestRoomFromEntrance[indexWarehouseRooms]) {
            ++indexBoxes;
            ++countStoredBoxes;
        }
        --indexWarehouseRooms;
    }
    return countStoredBoxes;
};
