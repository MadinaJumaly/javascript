import { hasDigit } from './hasDigit.js';
import { isValidEmail } from './isValidEmail.js';
import { isValidPhoneNumber } from './isValidPhoneNumber.js';
import { replaceASymbol } from './replaceASymbol.js';
import { filterArrayContainsString } from './filterArrayContainsString.js';

//hasDigit

console.log(hasDigit('abc123'));

//isValidEmail

console.log(isValidEmail('test@example.com'));

//isValidPhoneNumber

console.log(isValidPhoneNumber('123-456-7890'));

//replaceASymbol

console.log(replaceASymbol('banana'));

//filterArrayContainsString

console.log(filterArrayContainsString(['apple', 'banana', 'cherry'], 'an'));
