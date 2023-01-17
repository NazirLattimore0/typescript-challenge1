function sumArray(numbers: number[]): number {
  //sumArray takes in an array of numbers as the parameter
  let total = 0; //type annotation number[] indicates that the parameter is an array of numbers
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
