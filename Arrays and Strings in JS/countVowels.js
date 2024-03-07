function countVowels(str) {
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Initialize a variable to count the number of vowels
    let count = 0;
    
    // Convert the string to lowercase to handle both lowercase and uppercase vowels
    str = str.toLowerCase();
    
    // Iterate through each character of the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    
    return count;
}

// Test the function with an example string
const inputString = "Hello World";
console.log("Number of vowels:", countVowels(inputString)); // Output: Number of vowels: 3