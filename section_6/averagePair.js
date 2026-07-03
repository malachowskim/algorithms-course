function averagePair(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let avg = (nums[left] + nums[right]) / 2;
        if (avg > target) {
            right--;
        } else if (avg < target) {
            left++;
        } else {
            return true;
        }
    }

    return false;
}

let result = averagePair([1,2,3], 2.5);
console.log("averagePair([1,2,3], 2.5) >>> " + result + " (expected: true)");

result = averagePair([1,3,3,5,6,7,10,12,19], 8);
console.log("averagePair([1,3,3,5,6,7,10,12,19], 8) >>> " + result + " (expected: true)");

result = averagePair([-1,0,3,4,5,6], 4.1);
console.log("averagePair([-1,0,3,4,5,6], 4.1) >>> " + result + " (expected: false)");

result = averagePair([], 4);
console.log("averagePair([], 4) >>> " + result + " (expected: false)");