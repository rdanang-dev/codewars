// OppositesAttract byy jbarget 8 Kyu
function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0 && flower2 % 2 != 0) ||
    (flower2 % 2 === 0 && flower1 % 2 != 0)
    ? true
    : false;
}
// let a = lovefunc(1, 2);
// console.log(a);
