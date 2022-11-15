// 9. Most expensive item. (Objects)

// Create a function mostExpensiveItem which, given an object of items 
// (key: item, value: price) returns the most expensive item. 
// Hint: you may want to use an Object.keys() or Object.entries() method 
// combined with .sort() method for an elegant solution.
// Example/Test Case:
const obj = {
    tv: 30,
    skate: 20,
    stereo: 50,
  }
  // mostExpensiveItem(obj) should return "stereo"
  
  const mostExpensiveItem = obj => {
    const keyPairArr = Object.entries(ob);
    // console.log(keyPairArr);
    const prices = keyPairArr.map((item) => {
      const [first, second] = item;
      return second;
    })
    let maxPrice = Math.max(...prices);
    // console.log(maxPrice);
    let mostExpItem = Object.keys(ob).find(key => ob[key] === maxPrice);
    // console.log(mostExpItem);
    return mostExpItem;
  };
  console.log(mostExpensiveItem(obj));