function fibonacci(num) {
  // type your code here
  let gldnRatio = (1+ Math.sqrt(5))/2
  if(num == 0){
    return num;
  }else{
    let result = ((gldnRatio**num) - ((-gldnRatio)**-num))/ Math.sqrt(5)
    return Math.floor(result);
  }
 
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

// For a given number n, in a sequence of fibonacci numbers f(0) = 0 , f(1) = 1 f(2) = 1 f(3) = 2
//  actual number in the sequence = n - 3
// 
