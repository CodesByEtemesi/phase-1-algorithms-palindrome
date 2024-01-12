function isPalindrome(abba) {
  // Write your algorithm here
  // Convert the input string to lowercase
  abba = abba.toLowerCase();

  // Check if the string is equal to its reverse
  return abba === abba.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  START
    convert the input string abba to lowercase.
    check if the string is equal to its reverse.
    check if the output is true or false by checking the isPalindrome function.
    provide the output.
  END
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
/*
  Add written explanation of your solution here
  =>function isPalindrome(abba) {
      This line declares a function named isPalindrome that takes a single parameter abba. 
  =>abba = abba.toLowerCase();
      This line converts the input string abba to lowercase using the toLowerCase() method. 
      This ensures case-insensitivity when checking for palindromes.
  =>return abba === abba.split('').reverse().join('');
      This line checks if the lowercase string abba is equal to its reverse. 
      The string is reversed by splitting it into an array of characters (abba.split('')), 
      then reversing the array (reverse()), and finally joining the characters back into a 
      string (join('')).

      If the original string is equal to its reverse, the function returns true, indicating that 
      the input is a palindrome. Otherwise, it returns false.
  =>if (require.main === module) {
      This condition checks if the script is being executed directly (as the main module) rather 
      than being imported as a module in another script. 
  =>console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
      This block executes a test case where the isPalindrome function is called with the input "racecar". 
      The expected result is true because "racecar" is a palindrome 
  =>console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
      another test case is provided with the input "robot". The expected result is false 
      because "robot" is not a palindrome.
  =>module.exports = isPalindrome;
      This line exports the isPalindrome function so that it can be used as a module in other 
      scripts. 



*/
