function findAllDuplicates(array) {
    let set = new Set();
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (set.has(array[i])) {
            result.push(array[i]);
        } else {
            set.add(array[i]);
        }
    }

    return result;
}

let result = findAllDuplicates([4,3,2,7,8,2,3,1]);
console.log("findAllDuplicates([4,3,2,7,8,2,3,1]) >>> " + result + " (expected: [2,3]");

result = findAllDuplicates([4,3,2,1,0]);
console.log("findAllDuplicates([4,3,2,1,0]) >>> " + result + " (expected: []");

result = findAllDuplicates([4,3,2,1,0,1,2,3]);
console.log("findAllDuplicates([4,3,2,1,0,1,2,3]) >>> " + result + " (expected: [3,2,1]");