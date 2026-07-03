function maxSubarraySum(nums, length) {
    let currentMax = null, tempSum = 0;

    for (let i = 0; i < length; i++) {
        tempSum += nums[i];
    }


    for (let i = length; i < nums.length; i++) {
        tempSum -= nums[i - length];
        tempSum += nums[i];
        currentMax = Math.max(tempSum, currentMax);
    }

    return currentMax;
}

let result = maxSubarraySum([100,200,300,400], 2);
console.log(result + " (expected: 700)");

result = maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)
console.log(result + " (expected: 39)");

result = maxSubarraySum([-3,4,0,-2,6,-1], 2)
console.log(result + " (expected: 5)");

result = maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)
console.log(result + " (expected: 5)");

result = maxSubarraySum([2,3], 3)
console.log(result + " (expected: null)");
