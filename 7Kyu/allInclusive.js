function contain_all_rots(a, b) {
  let res;
  for (let i = 0; i < b.length; i++) {
    if (b[i].includes(a)) res += 1;
  }
  return res > 0 ? true : false;
}
console.log(
  contain_all_rots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]),
);

// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
