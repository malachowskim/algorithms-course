function minSubArrayLen(nums, target) {
    let left = 0, currentMin = Number.MAX_VALUE, tempSum = 0;

    for (let right = 0; right < nums.length; right++) {
        tempSum += nums[right];

        while (tempSum >= target) {
            currentMin = Math.min(currentMin, right - left + 1);
            tempSum -= nums[left++];
        }
    }

    return currentMin === Number.MAX_VALUE ? 0 : currentMin;
}

let result = minSubArrayLen([2,3,1,2,4,3], 7);
console.log(result + " (expected: 2)");

result = minSubArrayLen([2,1,6,5,4], 9);
console.log(result + " (expected: 2)");

result = minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52);
console.log(result + " (expected: 1)");

result = minSubArrayLen([1,4,16,22,5,7,8,9,10],39);
console.log(result + " (expected: 3)");

result = minSubArrayLen([1,4,16,22,5,7,8,9,10],55);
console.log(result + " (expected: 5)");

result = minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11);
console.log(result + " (expected: 2)");

result = minSubArrayLen([1,4,16,22,5,7,8,9,10],95);
console.log(result + " (expected: 0)");
