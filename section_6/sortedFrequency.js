function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx === -1) {
        return firstIdx;
    }
    let lastIdx = findLast(arr, num);
    return lastIdx - firstIdx + 1;
}

function findFirst(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
            return mid;
        } else if (num > arr[mid]) {
            return findFirst(arr, num, mid + 1, high);
        } else {
            return findFirst(arr, num, low, mid - 1);
        }
    }

    return -1;
}

function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
            return mid;
        } else if (num < arr[mid]) {
            return findLast(arr, num, low, mid - 1);
        } else {
            return findLast(arr, num, mid + 1, high);
        }
    }

    return -1;
}

let result = sortedFrequency([1,1,2,2,2,2,3], 2);
console.log("sortedFrequency([1,1,2,2,2,2,3], 2) >>> " + result + " (expected: 4)");

result = sortedFrequency([1,1,2,2,2,2,3], 3);
console.log("sortedFrequency([1,1,2,2,2,2,3], 3) >>> " + result + " (expected: 1)");

result = sortedFrequency([1,1,2,2,2,2,3], 1);
console.log("sortedFrequency([1,1,2,2,2,2,3], 1) >>> " + result + " (expected: 2)");

result = sortedFrequency([1,1,2,2,2,2,3], 4);
console.log("sortedFrequency([1,1,2,2,2,2,3], 4) >>> " + result + " (expected: -1)");