function highAndLow(numbers) {
  let low = numbers[0];
  let high = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (high < numbers[i]) {
      high = numbers[i];
    }
    if (low > numbers[i]) {
      low = numbers[i];
    }
  }
  return high.toString() + " " + low.toString();
}
console.log(highAndLow([8, 3, -5, 42, -1, 0, 0, -9, 4, 7, 4, -4]));
