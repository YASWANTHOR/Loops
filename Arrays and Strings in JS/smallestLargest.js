function findLargestSmallest(numbers) {
    // Initialize variables to store the largest and smallest numbers
    let largest = numbers[0];
    let smallest = numbers[0];
    
    // Iterate through the array to find the largest and smallest numbers
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        } else if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    
    // Return an object containing the largest and smallest numbers
    return {
        largest: largest,
        smallest: smallest
    };
}

// Test the function with an example array
let numbers = [4, 7, 2, 9, 1, 5];
let result = findLargestSmallest(numbers);
console.log("Largest number:", result.largest); // Output: Largest number: 9
console.log("Smallest number:", result.smallest); // Output: Smallest number: 1