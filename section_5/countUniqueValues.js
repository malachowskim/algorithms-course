function countUniqueValues(array) {
    if (array.length === 0)
        return 0;

    let i = 0, j = 1;

    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }

    return ++i;
}

let result = countUniqueValues([1, 1, 1, 1, 1, 2]);
console.log("countUniqueValues([1, 1, 1, 1, 1, 2]) >>> " + result + " (expected: 2)");

result = countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
console.log("countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) >>> " + result + " (expected: 7)");
