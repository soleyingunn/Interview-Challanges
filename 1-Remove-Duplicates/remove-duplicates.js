// 1. Remove duplicates from an array (this is one of the most common interview questions).

// 	Requirement: Use 3 different methods of solving this challenge. 
// 	Hint: these methods could be: 1) new Set; 2) filter; 3) reduce; 4) for loop.
	
// Test each of your 3 solutions:

const dups = [3,4,2,1,2,5,5,1,1,1,6];
// the result after removing duplicates should be [ 3, 4, 2, 1, 5, 6 ]

// 1) new Set

const uniq = [...new Set(dups)];
console.log(uniq);
// 2 types of arrays: lists and set
// lists allow duplicates, set does not
// cant use Set without new
// new Set returns an object
// ...turns the object into an array

 // const dups = [3,4,2,1,2,5,5,1,1,1,6];
// 2) filter()
const removeDups = dups.filter((item, index) => dups.indexOf(item) === index);
console.log(removeDups);

// const indexOf2 = [2,3,2,3,2].indexOf(2);
// console.log(indexOf2);
// 3 0
// 4 1
// 2 2
// 1 3
// 2 4 --> this will return false because indexOf 2 is 2 not 4 (only checks it ones)

// 3) reduce
function removeDuplicates(arr) {
let unique = arr.reduce(function (acc, curr) {
if (!acc.includes(curr)){
  acc.push(curr);      
}
return acc;
}, []);

return unique;
}

let result = removeDuplicates(dups);
console.log(result);

// function removeDuplicates1(dups) {
//   dups.reduce((unique, item) => {
// //   console.log(item, unique, unique.includes(item), unique.includes(item) ? unique : [...unique, item],
// //  );

//   return unique.includes(item) ? unique : [...unique, item];
// }, []);
// };

// console.log(removeDuplicates1(dups))

// 4) for loop
// const dups = [3,4,2,1,2,5,5,1,1,1,6];

function uniqueArr(dups) {
const result = [];

for (const i of dups) {
let noRepeat = true;

for (const j of result) {
  if (i === j) {
    noRepeat = false;
    break;
  }
}

if (noRepeat) {
  result.push(i);
}
}

return result;
}

// 🎉  [ 1, 3, 2 ]
console.log(uniqueArr(dups));

// function getUnique(arr){

//     let uniqueArr = [];

//     // loop through array
//     for(let i of arr) {
//         if(uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);
// }

// const array = [1, 2, 3, 2, 3];

// // calling the function
// // passing array argument
// getUnique(array);