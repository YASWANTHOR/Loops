function isRotation(str1, str2) {
    // If the lengths of the strings are different, they can't be rotations of each other
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Concatenate the first string with itself
    const concatenatedStr = str1 + str1;
    
    // Check if the second string is a substring of the concatenated string
    return concatenatedStr.includes(str2);
}

// Test the function with the example input
const string1 = "JavaJ2eeStrutsHibernate";
const string2 = "StrutsHibernateJavaJ2ee";
console.log(isRotation(string1, string2)); // Output: true