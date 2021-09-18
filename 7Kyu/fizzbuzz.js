// Return an array
function fizzbuzz(n) {
  let temp = []
  for (let i = 1; i <= n; i++) {
    i % 3 === 0 && i % 5 === 0
      ? temp.push("FizzBuzz")
      : i % 3 === 0
      ? temp.push("Fizz")
      : i % 5 === 0
      ? temp.push("Buzz")
      : temp.push(i)
  }
  return temp
}
fizzbuzz(20)
