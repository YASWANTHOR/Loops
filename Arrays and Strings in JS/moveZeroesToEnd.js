function moveZerosToEnd(numbers) {
    // Initialize a pointer to keep track of the position to insert non-zero elements
    let nonZeroIndex = 0;
    
    // Iterate through the array
    for (let i = 0; i < numbers.length; i++) {
        // If the current element is non-zero, move it to the front of the array
        if (numbers[i] !== 0) {
            numbers[nonZeroIndex] = numbers[i];
            nonZeroIndex++;
        }
    }
    
    // Fill the remaining positions with zeros
    for (let i = nonZeroIndex; i < numbers.length; i++) {
        numbers[i] = 0;
    }
    
    return numbers;
}

// Test the function with an example array
let numbers = [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(numbers)); // Output: [1, 3, 12, 0, 0]