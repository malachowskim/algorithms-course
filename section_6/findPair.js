function findPair(nums, target) {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        } else {
            set.add(nums[i] - target);
            set.add(nums[i] + target);
        }
    }

    return false;
}

let result = findPair([6,1,4,10,2,4], 2);
console.log(result + " (expected: true)");

result = findPair([8,6,2,4,1,0,2,5,13],1);
console.log(result + " (expected: true)");

result = findPair([4,-2,3,10],-6);
console.log(result + " (expected: true)");

result = findPair([6,1,4,10,2,4], 22);
console.log(result + " (expected: false)");

result = findPair([], 0);
console.log(result + " (expected: false)");

result = findPair([5,5], 0);
console.log(result + " (expected: true)");

result = findPair([-4,4], -8);
console.log(result + " (expected: true)");

result = findPair([-4,4], 8);
console.log(result + " (expected: true)");

result = findPair([1,3,4,6],-2);
console.log(result + " (expected: true)");

result = findPair([0,1,3,4,6],-2);
console.log(result + " (expected: true)");

result = findPair([1,2,3], 0);
console.log(result + " (expected: false)");