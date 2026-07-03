function sameFrequency(first, second) {
    let firstMap = new Map();
    first = String(first);
    second = String(second);

    if (first.length !== second.length) {
        return false;
    }

    for (let i = 0; i < first.length; i++) {
        if (firstMap.has(first[i])) {
            firstMap.set(first[i], firstMap.get(first[i]) + 1);
        } else {
            firstMap.set(first[i], 1);
        }

        if (firstMap.has(second[i])) {
            firstMap.set(second[i], firstMap.get(second[i]) - 1);
        } else {
            firstMap.set(second[i], -1);
        }
    }

    for (let value of firstMap.values()) {
        if (value !== 0) {
            return false;
        }
    }

    return true;
}

let result = sameFrequency(182, 281);
console.log("sameFrequency(182, 281) >>> " + result + " (expected: true)");

result = sameFrequency(34, 14);
console.log("sameFrequency(34, 14) >>> " + result + " (expected: false)");

result = sameFrequency(3589578, 5879385);
console.log("sameFrequency(3589578, 5879385) >>> " + result + " (expected: true)");

result = sameFrequency(22, 222);
console.log("sameFrequency(22, 222) >>> " + result + " (expected: false)");