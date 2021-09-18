function isPalindrome(x) {
  // let ispali
  for (let i = 0; i < x.length / 2; i++) {
    return x[i].toLowerCase() == x[x.length - (i + 1)].toLowerCase()
      ? console.log("palindrome")
      : console.log("nonpalindrome")
  }
  console.log("palindrome")
}
isPalindrome("a") //true
isPalindrome("aba") //true
isPalindrome("Abba") //true
isPalindrome("hello") //false
isPalindrome("Bob") //true
isPalindrome("Madam") //true
isPalindrome("AbBa") //true
isPalindrome("") //true
isPalindrome("YxwTPMUY") //true
isPalindrome("MAem") //true
