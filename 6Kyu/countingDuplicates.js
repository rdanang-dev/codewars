function duplicateCount(text) {
  //...
}
Test.assertEquals(duplicateCount("abcde"), 0);
Test.assertEquals(duplicateCount("aabbcde"), 2);
Test.assertEquals(duplicateCount("aabBcde"), 2, "should ignore case");
