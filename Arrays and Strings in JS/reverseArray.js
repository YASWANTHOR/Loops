function reverseArray(arr) {
    // Initialize two pointers, one at the beginning and one at the end of the array
    let start = 0;
    let end = arr.length - 1;
    
    // Swap elements until the pointers meet in the middle
    while (start < end) {
        // Swap elements at start and end indices
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        
        // Move the pointers towards the middle
        start++;
        end--;
    }
    
    // Return the reversed array
    return arr;
}

// Test the function with an example array
let array = [1, 2, 3, 4, 5];
console.log("Original Array:", array); // Output: Original Array: [1, 2, 3, 4, 5]
let reversedArray = reverseArray(array);
console.log("Reversed Array:", reversedArray); // Output: Reversed Array: [5, 4, 3, 2, 1]