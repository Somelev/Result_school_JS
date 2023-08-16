// Function Declaration (можно вначале вызвать функцию, а потом объявить)
// greet('Vladimir');

// function greet(name) {
// 	console.log('Hello -', name);
// }

// //Functiom Expression (нельзя объявить до объявления)
// const greet2 = function (name) {
// 	console.log('Hello -', name);
// };

// greet2('Vova');

// console.log(typeof greet)

// вызывает функционал по истечению времени setTimeout(функция(анонимная чаще всего), время)
// setTimeout(function () {
// 	// console.log('Timeout');
// 	greet('Vladimir');
// }, 2500);

//setInterval и как его можно остановить
// let counter = 0;
// const interval = setInterval(function () {
// 	if (counter === 5) {
// 		clearInterval(interval);
// 	} else {
// 		console.log(++counter);
// 	}
// 	// console.log(Math.random());
// }, 1000);

//Arrow Functions
function greet(name) {
	console.log('Hello -', name);
}

const arrow = (name, age) => {
	console.log('Hello -', name, age);
};
// arrow('Arrow', 11);

//приемущества -короткая запись, -не нужно писать return
const arrow2 = (name) => console.log('Hello -', name);
// arrow2('Arrow2');

function pow(num, exp) {
	return Math.pow(num, exp);
}
// console.log(pow(2, 3)); // 8

const pow2 = (num, exp) => Math.pow(num, exp);

// console.log(pow(3, 2)); // 9

// ======== Default Parameters
const sum = (a = 40, b = 2) => a + b;
// console.log(sum(4, 5)); // 42
// console.log(sum(40)); // NaN если не указывать параметры по умолчанию, например b = 2

//... create array
function sumAll(...numbers) {
	// console.log(numbers);
	// задача на суммирование базовым способом
	// let res = 0;
	// for (let num of numbers) {
	// 	res += num;
	// }
	// return res;

	//стремиться к этому
	return numbers.reduce((acc, cur) => (acc += cur), 0);
}

//console.log(sumAll(1, 2, 3, 4, 5, 6));

//Closures замыкание

function createPerson(name) {
	return function (lastName) {
		console.log(name + ' ' + lastName);
	};
}

const addLastName = createPerson('Vladimir');
// addLastName('Greatest');
// addLastName('Somelev');
