function sum(arr) {
    var count = 0;
    for (const e of arr) {
        count += e;
    }
    return count;
}

function sumr(arr) {
    // terminal/stopping condition
    if (arr.length === 0) {
        return 0;
    }

    // pop first element and add to the next
    // sumr(arr) return value.
    const x = arr.shift();
    return x + sumr(arr);
}

console.log(sumr([1, 3, 4])) // 8
console.log(sumr([])) // 8

// sumr([1,3,4])
    // 1 + sumr([3, 4])
        // 1 + 3 + sumr([4])
            // 1 + 3 + 4 + sumr([])
                // 1 + 3 + 4 + 0
            // return 4 + 0
        // return 3 + 4
    // return 1 + 7
// return 8