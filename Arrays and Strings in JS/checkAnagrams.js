function areAnagrams(str1, str2) {
    // Remove whitespace and convert the strings to lowercase
    str1 = str1.toLowerCase().replace(/\s/g, '');
    str2 = str2.toLowerCase().replace(/\s/g, '');

    // If the lengths of the strings are different, they can't be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort the characters of both strings and compare them
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Test the function with example strings
const string1 = "listen";
const string2 = "silent";
console.log(areAnagrams(string1, string2)); // Output: true