class Sort {
    static list = [3, 1, 6, 7, 5, 4, 9, 2]

    static bubbleSortIterable(list) {
        let sorted = false;

        while (!sorted) {
            sorted = true;

            for (let index = 0; index < list.length - 1; index++) {
                if (index + 1 >= list.length) {
                    continue
                }

                const currentItem = list[index];
                const nextItem = list[index + 1];

                if (currentItem > nextItem) {
                    sorted = false
                    list[index] = nextItem
                    list[index + 1] = currentItem
                }
            }
        }

        return list
    }
}

// Sort.bubbleSortIterable(Sort.list)

module.exports = Sort