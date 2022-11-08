// 8. Calculate the Total Price of Groceries. (Arrays and Objects)
// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity, and a price.
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
  // 	return parseFloat(sol.toFixed(2));
  // }
  // console.log(getTotalPrice(groceries));
  
  // OR
  
  function getTotalPrice(groceries) {
    let total = 0;
    groceries.forEach((x) => {
      total =  total + (x.price * x.quantity)
    })
    var result = parseFloat(total).toFixed( 2 );
    return Number(result)
  }
  
  console.log(getTotalPrice(groceries));