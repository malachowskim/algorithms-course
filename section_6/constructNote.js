function constructNote(message, letters) {
    if (letters.length < message.length)
        return false;

    let freqMap = new Map();

    for (let i = 0; i < letters.length; i++) {
        if (i < message.length) {
            freqMap.set(message[i], (freqMap.get(message[i]) || 0) + 1)
        }

        freqMap.set(letters[i], (freqMap.get(letters[i]) || 0) - 1)
    }

    for (let value of freqMap.values()) {
        if (value > 0)
            return false;
    }

    return true;
}

let result = constructNote("aa", "abc");
console.log("constructNote(\"aa\", \"abc\") >>> " + result + " (expected: false)");

result = constructNote("abc", "dcba");
console.log("constructNote(\"abc\", \"dcba\") >>> " + result + " (expected: true)");

result = constructNote("aabbcc", "bcabcaddff");
console.log("constructNote(\"aabbcc\", \"bcabcaddff\") >>> " + result + " (expected: true)");