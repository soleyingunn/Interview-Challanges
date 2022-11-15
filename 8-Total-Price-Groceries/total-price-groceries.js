// 8. Calculate the Total Price of Groceries. (Arrays and Objects)
// Create a function that takes an array of objects (groceries) which calculates the
// total price and returns it as a number. A grocery object has a product, a quantity, and a price.
// Test case:
const groceries = [
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
  ]
  
  //The parseFloat() method parses a value as a string and returns the first number.
  // toFixed() converts a number to a string, rounded to a specified number of decimals:
  // toFixed(2) returns number with 2 numbers after the dot, decimals
  
  // Your function should return 10.4
  
  // function getTotalPrice(arr) {
  // 	let total = 0;
  // 	for(let item of arr){
  // 		total +=(item["quantity"]*item["price"])
  // 	}
  // 	return parseFloat(total.toFixed(2));
  // }
  // console.log(getTotalPrice(groceries));
  
  // OR
  
  function getTotalPrice(arr) {
    let total = 0;
    arr.forEach(item => {
      total = total + (item.price * item.quantity);
    })
    let result = parseFloat(total).toFixed(2);
    return Number(result);
    };""
    
  console.log(getTotalPrice(groceries));


// The toFixed() method converts a number to a string.
// The toFixed() method rounds the string to a specified number of decimals.

// The parseFloat function converts its first argument to a string, 
// parses that string as a decimal number literal, then returns a number or NaN.