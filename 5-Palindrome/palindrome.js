// 5. Palindrome or not?

// Write a function palindrome which takes a string and returns true if the word is a palindrome and false if it is not. Note: not case-sensitive.

// Test cases:
// palindrome('table') returns false
// palindrome('Racecar') returns true

// Bonus: modify this function in such a way that it removes spaces and punctuation marks so that:

// palindrome('A man, a plan, a canal. Panama.') returns true

// Regular expressions are patterns used to match character combinations in strings.
// When the search for a match requires something more than a direct match, the pattern includes special characters.
// To pass the last test case, we can use two 
// Regular Expressions:

// /[^A-Za-z0–9]/g  
// OR
// /[\W_]/g

// function palindrome(str) {
//   // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
//   var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  
//   var lowRegStr = str.toLowerCase().replace(re, '');
//   // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
//   // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
//   // var lowRegStr = "amanaplanacanalpanama";
     
//   // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
//   var reverseStr = lowRegStr.split('').reverse().join(''); 
//   // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//   // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
//   // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
//   // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
//   // And, var reverseStr = "amanaplanacanalpanama";
   
//   // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
//   return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
// }
 
// palindrome("A man, a plan, a canal. Panama");

function palindrome(str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  console.log(palindrome("A man, a plan, a canal. Panama"));
  console.log(palindrome("Racecar"));
  console.log(palindrome("table"));
  
  
  // OR:
  
  // function palindrome(str) {
  //  var re = /[^A-Za-z0-9]/g;
  //  str = str.toLowerCase().replace(re, '');
  //  var len = str.length;
  //  for (var i = 0; i < len/2; i++) {
  //    if (str[i] !== str[len - 1 - i]) {
  //        return false;
  //    }
  //  }
  //  return true;
  // }
  // palindrome("A man, a plan, a canal. Panama");
  
  
  // SIMPLE:
  
  // function checkPalindrom (str) {
  //   return str == str.split('').reverse().join('');
  // }
  
  // console.log(checkPalindrom("racecar"));
  