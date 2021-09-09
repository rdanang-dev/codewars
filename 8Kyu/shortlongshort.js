function solution(a, b) {
  return a.toString().length > b.toString().length
    ? b + "" + a + "" + b
    : a + "" + b + "" + a;
}
console.log(solution("aaa", "bbbb"));
console.log(solution("2222", "11"));
