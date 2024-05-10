/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()

  notes from Jesse:
  parseInt(string, radix) // parses a string and returns a base 10 numbers, radix is the radix of the input string
  toString(radix) // parses a number from one base to another
*/

/* Base 10 to base 2 */
function decimalToBinary(blob) {
  // Your code here 
  return '0b'+blob.toString(2);
}

/* Base 10 to base 16 */
function decimalToHexadecimal(blob) {
  // Your code here 
  // const decimal = parseInt(blob, );
  return '0x'+blob.toString(16)

}

/* Base 2 to base 10 */
function binaryToDecimal(blob) {
  // Your code here 
  return parseInt(blob.substring(2), 2) // string.substring is similar to substr in SQL
}

/* Base 16 to base 10 */
function hexadecimalToDecimal(blob) {
  // Your code here 
  return parseInt(blob.substring(2), 16)
}

// console.log('Decimal to binary:')
// console.log(decimalToBinary(13))  // '0b1101'
// console.log(decimalToBinary(72))  // '0b1001000'
// console.log('')

// console.log('Decimal to hexadecimal:')
// console.log(decimalToHexadecimal(9))   // '0x9'
// console.log(decimalToHexadecimal(32))  // '0x20'
// console.log('')

// console.log('Binary to decimal:')
// console.log(binaryToDecimal('0b0101'))      // 5
// console.log(binaryToDecimal('0b10001000'))  // 136
// console.log('')

// console.log('Hexadecimal to decimal:')
// console.log(hexadecimalToDecimal('0x51'))    // 81
// console.log(hexadecimalToDecimal('0x10ff'))  // 4351


module.exports = {
  decimalToBinary,
  decimalToHexadecimal,
  binaryToDecimal,
  hexadecimalToDecimal
}
