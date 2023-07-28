// Operators
// let a = 10;
// let b = 5;
// let c = 32;

// c = c + a;

// c += a;

// c = 4 ** 2;

/* 03_task_1
let a = 6;
a % 2 === 0 ? console.log('Четное') : console.log('Нечетное');

let a = 7;
a += 1;
a % 2 === 0 ? console.log('Четное') : console.log('Нечетное');
*/

/* 03_task_2

let n = 1000;
for (let i = 0; i <= n; i++) {
	if (i % 2 != 0) console.log(i);
}

let n = 1000;
for (let i = 1; i <= n; i++) {
	if (i % 12 === 0) console.log(i);
}
 */

/* 03_task_3
 
let arroy = [1, 10, 15, -100, -23, 19, 15032];
let copyArroy = [];
for (let i = 0; i < arroy.length; i++) {
	copyArroy.push(arroy[i] + arroy[i] * 0.25);
	console.log(arroy[i], copyArroy[i]);
}
*/

/* 03_task_4
 
seyHello('Vladimir');
function seyHello(name) {
	if (name === undefined) name = 'sameone';
	console.log(`Hello, ${name}!`);
}

	
const seyHello = (name) => {
	if (name === undefined) name = 'sameone';
	console.log(`Hello, ${name}!`);
}
seyHello();
*/

/* 03_task_5
 
function calc(a, b, operation) {
	let sum = 0;

	if (operation === '+') sum = a + b;
	else if (operation === '-') sum = a - b;
	else if (operation === '*') sum = a * b;
	else if (operation === '/') sum = a / b;

	// operation === '-'
	// 	? (sum = a - b)
	// 	: operation === '*'
	// 	? (sum = a * b)
	// 	: operation === '/'
	// 	? (sum = a / b)
	// 	: (sum = a + b);
	return sum;
}

console.log(calc(1, 2, '+')); // 3
console.log(calc(1, 2, '-')); // -1
console.log(calc(2, 2, '*')); // 4
console.log(calc(4, 2, '/')); // 2
*/

/* 03_task_6
 
let age = 28;
let category = age >= 18 ? 'Взрослый' : 'Детский'
console.log(age, category)
*/

/* 03_task_7
 

let a = 3;
let b = 24;
let c = a > b ? a : b;

console.log(c);
*/