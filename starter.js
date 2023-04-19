////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const calculator = (num1, num2, callback) => {
  //checks if first 2 inputs can be coerced into numbers +num replaces Number()
  if (!isNaN(num1) && !isNaN(num2)) {
    num1 = +num1
    num2 = +num2
    let callbackResult = callback(num1, num2)
    return callbackResult
  } else {
   return "Give me two valid numbers"
  }
}
console.log(calculator(6,8,add))
console.log(calculator(8,25,multiply))
console.log(calculator(2974,475,divide))
console.log(calculator(285,27,subtract))
///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'scratching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
]

// CODE HERE
//these are our callbacks
const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * 1 - discount
}
const applyFlatDiscount = (product, discount) => {
product.displayPrice = product.basePrice - discount
}
//this function takes a list of products(array of objects)
//a function that signifies how to discount and the discount percents must be in decimal form
//function returns nothing it modifies the original list of products
function applyDiscounts(productsList, discountTypeCallback, discountAmount, category) {
  for (let i = 0; i< productsList.length; i++) {
   if(productsList[i].category === category) {
     discountTypeCallback(productsList[i], discountAmount)
   }
  }
 
}
applyDiscounts(dogProducts, applyFlatDiscount, 1.5);
console.log(dogProducts)
applyDiscounts(catProducts, applyPercentDiscount, 10, 2);
console.log(catProducts)
////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE
