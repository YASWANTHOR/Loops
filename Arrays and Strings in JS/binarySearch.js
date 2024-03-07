function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        // Check if the middle element is the target
        if (arr[mid] === target) {
            return mid;
        }
        
        // If the target is smaller than the middle element, search the left half
        if (target < arr[mid]) {
            right = mid - 1;
        }
        // If the target is larger than the middle element, search the right half
        else {
            left = mid + 1;
        }
    }
    
    // If the target is not found, return -1
    return -1;
}

// Test the function with an example array
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
const index = binarySearch(sortedArray, target);
if (index !== -1) {
    console.log("Element", target, "found at index", index);
} else {
    console.log("Element", target, "not found in the array");
}