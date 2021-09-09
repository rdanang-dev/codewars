// Sum of positive by jbpasquier 8 kyu
function positiveSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) total += arr[i];
  }
  return total;
}
let a = positiveSum([-1, 2, 3, 4, -5]);
console.log(a);
