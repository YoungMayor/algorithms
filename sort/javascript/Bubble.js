const list = [3, 1, 6, 7, 5, 4, 9, 2, ]

const bubbleSort = (list) => {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let index = 0; index < list.length; index++) {
            const currentItem = list[index];

            const previousIndex = index > 0 ? index - 1 : undefined;
            if (isNaN(previousIndex)) {
                continue
            }

            const previousItem = list[previousIndex];
            if (currentItem < previousItem) {
                sorted = false

                list[previousIndex] = currentItem
                list[index] = previousItem
            }
        }
    }

    return list
}

console.log(bubbleSort(list));

module.exports = bubbleSort