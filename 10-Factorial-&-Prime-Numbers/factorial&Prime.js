// 10. Bonus: Factorials and Primes.  

// A. Write a function factorial that takes a number (an integer) and calculates its factorial.

// Test cases:
// factorial(5) returns 25
// factorial(0) returns 1


// function factorialize(num) {
//   if (num < 0) 
//         return -1;
//   else if (num == 0) 
//       return 1;
//   else {
//       return (num * factorialize(num - 1));
//   }
// }
// factorialize(5);

// OR

// function factorialize(num) {
//   var result = num;
//   if (num === 0 || num === 1) 
//     return 1; 
//   while (num > 1) { 
//     num--;
//     result *= num;
//   }
//   return result;
// }
// factorialize(5);


// 5 * factorialize(4)
// 4 * factorialize(3)
// 3 * factorialize(2)
// 2 * factorialize(1)
// 1 * factorialize(0)

// (5 * (5 - 1)) 
// (20 * (4 - 1))
// (60 * (3 - 1))
// (120 * (2 - 1))
// (120)


// B. Write a function prime which takes a number (an integer) and returns true if that number is prime and false if it's not.
// A prime number is any positive integer (except 1) that is evenly divisible by only two divisors: 1 and itself. 1 is not considered a prime number. The first ten prime numbers are:
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

// Test cases:
// prime(31) returns true
// prime(10) returns false
// prime(1) returns false

function isPrimeNumber(n) {
    for (var i = 2; i < n; i++) { // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
      if(n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
    }
    return n > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
  }
  
  console.log(isPrimeNumber(1));  // returns false
  console.log(isPrimeNumber(2));  // returns true
  console.log(isPrimeNumber(9));  // returns false
  console.log(isPrimeNumber(11)); // returns true