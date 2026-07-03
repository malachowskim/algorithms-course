function findLongestSubstring(string) {
    let right = 0, left = 0, set = new Set(), currentMax = 0;

    for (right = 0; right < string.length; right++) {
        let currentChar = string[right];
        if (set.has(currentChar)) {
            currentMax = Math.max(currentMax, right - left);

            do {
                set.delete(string[left]);
            } while (string[left++] !== currentChar)
        }

        set.add(currentChar);
    }

    currentMax = Math.max(currentMax, right - left);

    return currentMax;
}

let result = findLongestSubstring('');
console.log(result + " (expected: 0)");

result = findLongestSubstring('rithmschool');
console.log(result + " (expected: 7)");

result = findLongestSubstring('thisisawesome');
console.log(result + " (expected: 6)");

result = findLongestSubstring('thecatinthehat');
console.log(result + " (expected: 7)");

result = findLongestSubstring('bbbbbb');
console.log(result + " (expected: 1)");

result = findLongestSubstring('longestsubstring');
console.log(result + " (expected: 8)");

result = findLongestSubstring('thisishowwedoit');
console.log(result + " (expected: 6)");
