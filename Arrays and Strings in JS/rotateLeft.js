function rotateLeft(arr, x) {
    // Calculate the number of elements to rotate
    let rotationCount = x % arr.length;
    
    // Slice the array into two parts and concatenate them in reverse order
    let rotatedArray = arr.slice(rotationCount).concat(arr.slice(0, rotationCount));
    
    return rotatedArray;
}

// Test the function with the example input
let arr = [1, 2, 3, 4, 5, 6, 7];
let x = 2;
let rotatedArray = rotateLeft(arr, x);
console.log(rotatedArray.join(' ')); // Output: 3 4 5 6 7 1 2