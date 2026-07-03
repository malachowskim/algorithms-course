function countZeroes(nums) {
    let lb = 0, rb = nums.length - 1;

    while (lb < rb) {
        let midpoint = Math.floor((lb + rb) / 2);
        if (nums[midpoint] === 1) {
            lb = midpoint + 1;
        } else {
            rb = midpoint;
        }
    }

    if (nums[lb] === 0) {
        return nums.length - lb;
    } else {
        return 0;
    }
}

let result = countZeroes([1,1,1,1,0,0]);
console.log(result + " (expected: 2)");

result = countZeroes([1,0,0,0,0]);
console.log(result + " (expected: 4)");

result = countZeroes([0,0,0]);
console.log(result + " (expected: 3)");

result = countZeroes([1,1,1,1]);
console.log(result + " (expected: 0)");
