function isSubsequence(sub, dom) {
    if (sub.length > dom.length) {
        return false;
    }

    let left = 0;
    for (let i = 0; i < dom.length; i++) {
        if (sub[left] === dom[i]) {
            left++;
            if (left === sub.length) {
                return true;
            }
        }
    }

    return false;
}

let result = isSubsequence("hello", "hello world");
console.log("isSubsequence(\"hello\", \"hello world\") >>> " + result + " (expected: true)");

result = isSubsequence("sing", "sting");
console.log("isSubsequence(\"sing\", \"sting\") >>> " + result + " (expected: true)");

result = isSubsequence("abc", "abracadabra");
console.log("isSubsequence(\"abc\", \"abracadabra\") >>> " + result + " (expected: true)");

result = isSubsequence("abc", "acb");
console.log("isSubsequence(\"abc\", \"acb\") >>> " + result + " (expected: false)");