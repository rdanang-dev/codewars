function between(a, b) {
  let result = [];
  for (a; a < b + 1; a++) {
    result.push(a);
    // console.log(a);
  }
  return result;
}
console.log(between(-2, 4));
