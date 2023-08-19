//base js part 1

/*task 1
 
function isPrimeNumber(num) {
	if (num < 2) return false;
	const sqr = Math.sqrt(num);
	for (let i = 2; i <= sqr; i++)
		if (num % i === 0) return false;
	return true;
}
console.log(isPrimeNumber());
*/

/*task 2
 
function func(num, min, max) {
	if (num < min) return min ** 2;
	if (num > max) return max ** 2;
	if (num < max - (max - min) / 2) return num ** 2;
	else return Math.floor(num);
}

console.log(func(3, 1, 10)); // 9
console.log(func(15, 1, 10)); // 100
console.log(func(5, 1, 10)); // 25
console.log(func(8.5, 1, 10)); // 8
*/

/*task 3

function isPerfectNumber(number) {
	let sum = 1;
	let divider = 0;
	for (let i = 2; i < number; i++) {
		divider = number % i;
		if (divider === 0) {
			sum += i;
		}
		// console.log(sum);
	}
	return number === sum;
}

console.log(isPerfectNumber(6)); // true
console.log(isPerfectNumber(28)); // true
console.log(isPerfectNumber(12)); // false
console.log(isPerfectNumber(16)); // false
 */

/*task 4
 
function getNumberDigit(number, digitPosition) {
	let count = -1;
	let num = number;
	while (num !== 0) {
		count++;
		num = parseInt(num / 10);
	}
	// console.log(count);
	if (digitPosition > count) return console.log('undefined');
	const a = Math.floor(number / 100);
	const c = number % 10;
	const b = parseInt(number / 10 - 10 * a);
	const arr = [];
	if (digitPosition <= count) arr.push(a, b, c);
	console.log(arr);
	console.log(arr[digitPosition]);
}

getNumberDigit(123, 0); // 1
getNumberDigit(123, 1); // 2
getNumberDigit(123, 2); // 3
getNumberDigit(1, 2); // undefined
*/

//base js part 2

/*task 1
 
const car = {
	name: 'Hendai Solaris',
	type: 'sedan',
	maxSpeed: '320',
	color: 'red',
};

function resultHTML(car) {
	const result = `article>
	<div>
		<h2>${car.name}</h2>
		<span>${car.type}</span>
	</div>
	<div>
		<span>Maximum speed:</span>
		<span>${car.maxSpeed}</span>
	</div>
	<div>
		<span>Color:</span>
		<span>${car.color}</span>
	</div>
	</article>
	`;
	return result;
}
console.log(resultHTML(car))
*/

/*task 2
 
// const countWords = (sentence) => {
// 	const result = sentence.split(' ').length;
// 	return result;
// };
const countWords = (sentence) => sentence.split(' ').length
const sentence = 'Hello, how are you?';
console.log(countWords(sentence)); // 4
*/

/*task 3
 
// const getInitials = (fullName) => {
// 	const arr = fullName.trim().split('')
// 	const firstChar = arr[0];
// 	let secondChar = ' ';
// 	// console.log(arr);
// 	// for (let i = 1; i < arr.length; i++) {
// 	// 	if (arr[i] === arr[i].toUpperCase()) {
// 	// 		secondChar = arr[i];
// 	// 	}
// 	// }
// 	return `${firstChar}. ${secondChar}.`;
// };

const getInitials = (fullName) => `${fullName[0]}. ${fullName.split(' ').splice(1).join()[0]}.`

const fullName = 'John Doe';
const initials = getInitials(fullName);
console.log(initials); // "J. D."
*/

/*task 4
 
const generateGoogleString = (num) =>
	`G${num >= 2 ? 'o'.repeat(num) : 'oo'}gle`;

console.log(generateGoogleString(4));
// Goooogle

console.log(generateGoogleString(0));
// Google

console.log(generateGoogleString(-2));
*/

/*task 5
 
function countVowels(str) {
	const vowels = 'aeiouyаеиоуэюя';
	let res = 0;
	for (let i = 0; i < str.length; i++) {
		if (vowels.indexOf(str[i]) !== -1) {
			res++;
		}
	}
	return res;
}

const str = 'Hello, Привет!';
console.log(countVowels(str)); // 4
*/

//base js part 3

/*task 1
 
function sumNumbers() {
	const arr = Array.from(arguments);
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

const result1 = sumNumbers(1, 2, 3, 4, 5);
console.log(result1); // 15

const result2 = sumNumbers(10, 20, 30);
console.log(result2); // 60
*/

/*task 2
 
// function findMaxValue(arr) {
// 	// let max = 0;
// 	// if (arr.length === 0) max = undefined;
// 	// else {
// 	// 	for (let i = 0; i < arr.length; i++) {
// 	// 		if (arr[i] > max) max = arr[i];
// 	// 	}
// 	// }
// 	// return max;
// }
// const findMaxValue = (arr) => arr.length !== 0 ? Math.max.apply(null, arr) : undefined;

// const numbers1 = [1, 2, 3, 4, 5];
// const max1 = findMaxValue(numbers1);
// console.log(max1); // 5

// const numbers2 = [10, 20, 5, 30, 15];
// const max2 = findMaxValue(numbers2);
// console.log(max2); // 30

// const emptyArray = [];
// const maxEmpty = findMaxValue(emptyArray);
// console.log(maxEmpty); // undefined
*/

/*task 3
 

function calculateAverage(arr) {
	let sum = 0;
	if(arr.length === 0) {
		return 0;
	} else { 
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
	}
	return sum / arr.length;
}

// const calculateAverage = (arr) =>  arr.length !== 0 ? arr.reduce((acc, cur) => acc + cur, 0) / arr.length : 0

const numbers1 = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers1)); // 3

const numbers2 = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers2)); // 30

const emptyArray = [];
console.log(calculateAverage(emptyArray)); // 0
*/

/*task 4
 
function isPalindrome(word) {
	return word === word.split('').toReversed().join('')
}

console.log(isPalindrome('level')); // true
console.log(isPalindrome('radar')); // true
console.log(isPalindrome('hello')); // false
*/

/*task 5

// function removeDuplicates(arr) {
// 	const newArr = [];
// 	if(arr.length === 0) return newArr;
// 	else {
// 		for (let i = 0; i < arr.length; i++) {
// 			if (arr[i] !== arr[i + 1]) {
// 				newArr.push(arr[i]);
// 			}
// 		}
// 	}
// 	return newArr;
// }

// const removeDuplicates = (arr) => Array.from( new Set(arr))
const removeDuplicates = (arr) => [...new Set(arr)];

const numbers1 = [1, 2, 3, 3, 4, 5, 5];
console.log(removeDuplicates(numbers1)); // [1, 2, 3, 4, 5]

const numbers2 = [10, 20, 30, 30, 40, 40, 50];
console.log(removeDuplicates(numbers2)); // [10, 20, 30, 40, 50]

const emptyArray = [];
console.log(removeDuplicates(emptyArray)); // []
 */

/*task 6

function createCounter(value) {
	let counter = value;

	function inc() {
		counter++;
	}

	function dec() {
		counter--;
	}

	function get() {
		return counter;
	}

	return { inc, dec, get };
}

const { inc, dec, get } = createCounter(5);
console.log(get()); // 5
inc();
inc();
inc();
dec();
console.log(get()); // 7
 */