function bubbleSort(arr) {
    const arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        // arr2.push(arr[i]);  // O(N) space complexity


        for (let j = 0; j < arr.length; j++) {
            // arr2.push(arr[j]);  // O(N^2) space complexity

            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([1, 3, 43, 2, 3, 6, 9]));
console.log(bubbleSort([10, 9, 8, 4, 3, 2, 1]));

// runtime = O(N^2)
// space: O(1)

// space = memory allocation
// runtime = # of operations