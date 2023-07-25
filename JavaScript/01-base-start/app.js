// let num = 42;
// let firstName = 'Vladimir';
// const isProgrammer = true;

// firstName = 'Max';
// isProgrammer = false // error, its const

/* 1 task
var a = 5;
let b = 10;
const c = 13;

console.log(c);
*/

/* 2 task
a = 7;
b = 12;

const a = 100;
a = 20;
console.log(a);

console.log(a);
let a = 15;
console.log(a);

console.log(a);
var a;
a = 10;
console.log(a);
*/

// 3 task
// let productName = 'хлеб';
// let productPrice = 40;
// let productQuantity = 3;
// let resultCost = productPrice * productQuantity;

// console.log(
// 	`Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽`
// );

/* 4 task
console.log();
console.log("typeof 'Hello': ", typeof 'Hello');
console.log('typeof 10: ', typeof 10);
console.log('typeof {}: ', typeof {});
console.log('typeof null: ', typeof null);
console.log('typeof undefined: ', typeof undefined);
console.log('typeof true: ', typeof true);
console.log('typeof []: ', typeof []);
console.log('typeof (() => {}): ', typeof (() => {}));
*/

/* 5 task

console.log('10 == 10: ', 10 == 10);
console.log('10 != 10: ', 10 != 10);
console.log('12 == "Привет": ', 12 == 'Привет');
console.log('10 < 11: ', 10 < 11);
console.log('12 > 20: ', 12 > 20);
console.log('true && true: ', true && true);
console.log('true && false: ', true && false);
console.log('false && true: ', false && true);
console.log('false || true: ', false || true);
console.log('true || false: ', true || false);
console.log('true || true: ', true || true);
console.log('10 <= 10: ', 10 <= 10);
console.log('18 <= 20: ', 18 <= 20);
console.log('50 >= 50: ', 50 >= 50);
console.log('51 >= 50: ', 51 >= 50);
console.log('{} === {}: ', {} === {});
console.log('{} == {}: ', {} == {});

const a = {};
const b = a;
console.log(a === b);
*/

/* 6 task
 
let b = 10;
let a = 6;
console.log(a > b);
*/


/*console.log(a);
console.log(b);
console.log(c);

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplicationBtn = document.getElementById('multiplication');
const divisionBtn = document.getElementById('division');
let action = '+';

// console.log(input1.value);
// console.log(resultElement.textContent);
// resultElement.textContent = 41;

// const sum = Number(input1.value) + Number(input2.value);
// resultElement.textContent = sum;
// console.log(typeof sum);

plusBtn.onclick = function () {
	action = '+';
};

minusBtn.onclick = function () {
	action = '-';
};

multiplicationBtn.onclick = function () {
	action = '*';
};

divisionBtn.onclick = function () {
	action = '/';
};

function printResult(result) {
	if (result > 0) {
		resultElement.style.color = 'green';
	} else {
		resultElement.style.color = 'red';
	}
	resultElement.textContent = result;
}

function computeNumbersActions(inp1, inp2, actionSumbol) {
	const num1 = Number(inp1.value);
	const num2 = Number(inp2.value);
	if (actionSumbol == '+') {
		return num1 + num2;
	}

	if (actionSumbol == '-') {
		return num1 - num2;
	}

	if (actionSumbol == '*') {
		return num1 * num2;
	}

	if (actionSumbol == '/') {
		return num1 / num2;
	}
}

submitBtn.onclick = function () {
	const result = computeNumbersActions(input1, input2, action);
	printResult(result);

	//   if (action === '+') {
	//     const sum = Number(input1.value) + Number(input2.value);
	//     printResult(sum);
	//   }

	//   if (action === '-') {
	//     const sum = Number(input1.value) - Number(input2.value);
	//     printResult(sum);
	//   }
};
*/
