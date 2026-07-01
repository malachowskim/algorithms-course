function validAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }

    let s1map = new Map();

    for (let i = 0; i < s1.length; i++) {
        if (s1map.has(s1[i])) {
            s1map.set(s1[i], s1map.get(s1[i]) + 1);
        } else {
            s1map.set(s1[i], 1);
        }
    }

    for (let i = 0; i < s2.length; i++) {
        let char = s2[i];

        if (!s1map.has(char) || s1map.get(char) === 0) {
            return false;
        }

        s1map.set(char, s1map.get(char) - 1);
    }

    return true;
}

let result = validAnagram('abc', 'cba');
console.log("validAnagram('abc', 'cba') >>> " + result + " (expected: true)\n");

result = validAnagram('listen', 'silent');
console.log("validAnagram('listen', 'silent') >>> " + result + " (expected: true)\n");