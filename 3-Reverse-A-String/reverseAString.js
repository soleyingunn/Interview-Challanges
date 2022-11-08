// 3. Reverse a String

// A. Write a function reverseWords that takes a sentence and reverses the order of the words like so:

// reverseWords('Greetings from Earth') should return 'Earth from Greetings'

function reverseWords(str) {
    let reverseWordArr = str.split(" ")
    console.log(reverseWordArr);
    let reverse = reverseWordArr.map(word => word.split("").reverse().join(""));
    console.log(reverse);
    return reverse.join(" ");
  }
  
  console.log(reverseWords('Greetings from Earth'));
  
  // 	B. Now, write a function reverseString that takes a sentence and reverses the entire string like so:
  
  // reverseString('Greetings from Earth') should return 'htraE morf sgniteerG'
  
  
  function reverseString(str) {
    let splitStr = str.split("");
    let reverseArr = splitStr.reverse();
    let joinArr = reverseArr.join("");
      return joinArr;
  }
  console.log(reverseString("Greetings from Earth"));
  
  
  
  function reverseString1(str) {
      let newString = "";
      for (let i = str.length - 1; i >= 0; i--) {
          newString += str[i];
      }
      return newString;
  }
  console.log(reverseString1("Greetings from Earth"));