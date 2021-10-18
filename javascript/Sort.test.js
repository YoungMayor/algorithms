const Sort = require('./Sort')
const list = [3, 1, 6, 7, 5, 4, 9, 2]

const algorithms = [
    'bubbleSortIterable',
    'bubbleSortIterable',
]

algorithms.forEach((algorithm) => {
    const result = Sort[algorithm](list)

    console.log(`The result from ${algorithm} is: ${result}`)
})