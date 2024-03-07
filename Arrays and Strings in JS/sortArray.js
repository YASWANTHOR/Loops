function quickSort(arr) {
    // Base case: if the array has 0 or 1 elements, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }
    
    // Choose a pivot element (in this implementation, we choose the last element)
    const pivotElement = arr[arr.length - 1];
    
    // Create arrays to hold elements smaller and greater than the pivot
    const smallerElements = [];
    const greaterElements = [];
    
    // Partition the array into two subarrays based on the pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivotElement) {
            smallerElements.push(arr[i]);
        } else {
            greaterElements.push(arr[i]);
        }
    }
    
    // Recursively sort the smaller and greater subarrays
    const sortedSmaller = quickSort(smallerElements);
    const sortedGreater = quickSort(greaterElements);
    
    // Combine the sorted subarrays with the pivot to get the final sorted array
    return [...sortedSmaller, pivotElement, ...sortedGreater];
}

// Test the function with an example array
const unsortedArray = [9, 5, 7, 1, 3, 8, 2, 6, 4];
console.log("Original array:", unsortedArray);
const sortedArray = quickSort(unsortedArray);
console.log("Sorted array:", sortedArray);