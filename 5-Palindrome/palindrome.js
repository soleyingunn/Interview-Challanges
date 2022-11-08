// 5. Palindrome or not?

// Write a function palindrome which takes a string and returns true if the word is a palindrome and false if it is not. Note: not case-sensitive.

// Test cases:
// palindrome('table') returns false
// palindrome('Racecar') returns true

// Bonus: modify this function in such a way that it removes spaces and punctuation marks so that:

// palindrome('A man, a plan, a canal. Panama.') returns true

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
  