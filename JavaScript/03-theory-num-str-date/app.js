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
 */
