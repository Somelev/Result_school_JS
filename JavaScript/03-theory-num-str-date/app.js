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
*/

 
/*task 2
*/
 
/*task 3
*/
 
/*task 4
*/
 
/*task 5
*/
 