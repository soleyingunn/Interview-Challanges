array = [ 3, 4, 2, 1, 5, 6 ];

let arrSorted = array.sort((a, b) =>  a - b);

console.log(arrSorted);

let arrSorted1 = array.sort((a, b) => b - a);

console.log(arrSorted1);


// sum 

let sumOfArr = array.reduce((a, b) => a + b);

console.log(sumOfArr);