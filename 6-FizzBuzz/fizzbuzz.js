// // 6. FizzBuzz: very common interview question!

// // Write a function fizzBuzz that takes a number n as an argument and returns an array of all the numbers from 1 to the number n, inclusive. 
// // But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. 
// // For numbers which are multiples of both three and five use “FizzBuzz”.

// // Example / test case:
// // fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

// function fizzBuzz(n) {
//   for (let i = 1; i <= 15; i++) {
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
//   }
//   return i;
// };
//     console.log("fizzBuzz(15)")


// for (let i = 1; i < 16;) console.log((i++ % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i);
// console.log(i)


// for (var i=1; i <= 20; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
// }


// const fizzBuzz = n => ({
//   true: n, 
//   [ n % 5 === 0]: "Buzz",
//   [ n % 3 === 0]: "Fizz",
//   [ n % 15 === 0]: "FizzBuzz",
//   [ n === 0 ]: 0, 
// }).true

// const thisIsAFizzBuzz = n => [...Array(n).keys()].forEach(n => console.log(fizzBuzz(n)));

// const arr = [];

// console.log(arr.push(thisIsAFizzBuzz(16)));


// function fizzBuzz(number) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     return "Fizz Buzz";
//   } else if (number % 3 === 0) {
//     return "Fizz";
//   } else if (number % 5 === 0) {
//     return "Buzz";
//   } else {
//     return number;
//   }
// };
// console.log(fizzBuzz(14));



// function fizzBuzz(n){
//      for(let i = 0 ; i < n ; ){
//             console.log( 
//                    (++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i
//                       )
//        }
// }

// fizzBuzz(15);

function fizzBuzz(n) {
    let arr = [];
    
    for (let i = 1; arr.length < n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push('FizzBuzz');
      } else if (i % 3 === 0) {
        arr.push('Fizz');
      } else if (i % 5 === 0) {
        arr.push('Buzz');
      } 
      else {
        arr.push(i);
      }
    }
    return arr;
  };
  
  console.log(fizzBuzz(15));