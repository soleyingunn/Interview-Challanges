// 4. Find the Longest Word in a String

// Write a function longestWord which takes a sentence and returns the length of the
// longest word. (Try to use a one-line arrow function if you can. :)

// Test case: 
// longestWord('What if we try a super-long word such as otorhinolaryngology') 
// should return 19

function longestWord(str) {
    let strSplit = str.split(' ');
    let longestW = 0;
    for (let i = 0; i < strSplit.length; i++) {
      if (strSplit[i].length > longestW) {
      longestW = strSplit[i].length;
       }
      }
    return longestW;
  };
  
  console.log(longestWord('The quick brown fox jumped otorhinolaryngology'));
  