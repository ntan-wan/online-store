// function generatePassword(passwordLength) {
//   const numbers = '0123456789';
//   const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const lowerCaseLettters = 'abcdefghijklmnopqrstuvwxyz';
//   const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é";

//   let password = '';
//   let charsList = lowerCaseLettters;
//   charsList += numbers;
//   if (data.uppercase) {
//     charsList += upperCaseLetters;
//   }
//   if (data.symbols) {
//     charsList += specialCharacters;
//   }
//   for (let i = 0; i < passwordLength; i++) {
//     const charIndex = Math.round(Math.random() * charsList.length);
//     password = password + charsList.charAt(charIndex);
//   }

//   return password;
// }

// export default {
//   numbers,
//   upperCaseLetters,
//   lowerCaseLettters,
//   specialCharacters,
//   generatePassword,
// };
