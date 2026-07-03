function areThereDuplicates(...args) {
    let set = new Set();

    for (let arg of args) {
        if (set.has(arg))
            return true;

        set.add(arg);
    }

    return false;
}

let result = areThereDuplicates(1, 2, 3);
console.log("areThereDuplicates(1, 2, 3) >>> " + result + " (expected: false)");

result = areThereDuplicates(1, 2, 2);
console.log("areThereDuplicates(1, 2, 2) >>> " + result + " (expected: true)");

result = areThereDuplicates('a', 'b', 'c', 'a');
console.log("areThereDuplicates('a', 'b', 'c', 'a') >>> " + result + " (expected: true)");