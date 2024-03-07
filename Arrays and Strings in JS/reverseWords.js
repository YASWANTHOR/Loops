function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
    
    // Reverse each word in the array
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });
    
    // Join the reversed words into a sentence
    const reversedSentence = reversedWords.join(' ');
    
    return reversedSentence;
}

// Test the function with the example input
const inputSentence = "Java J2EE Reverse Me";
console.log(reverseWords(inputSentence)); // Output: "avaJ EE2J esreveR eM"