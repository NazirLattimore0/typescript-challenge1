function sumArray(numbers: number[]): number {
  //sumArray takes in an array of numbers as the parameter
  let total = 0; //type annotation number[] indicates that the parameter is an array of numbers
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// Create a function that takes an array of numbers
//  as an argument and returns the sum of all the numbers in
//  the array. Use type annotations to indicate the type
//   of the parameter and return value.
