/*const person = {
	name: 'Vladimir',
	age: 28,
	isYoutuber: true,
	languages: ['ru', 'en'],
	address: {
		city: 'Moscow',
		street: 'Moscowskuy prospect',
	},
	'complex key': 'complex value',
	['key_' + 21 * 2]: 'computed value',
	greet() {
		console.log('Greet from person');
	},
	arrow: () => {
		console.log('Person Arrow', this); // this в стрелочной функции обращается к глобальному объекту а не к текущему, т.к. стр. функция не создает свой контекст
	},
	// info() {
	// 	console.log('Person name', person.name);
	// }, // неправильное не задавать так никогда, использовать 'this'
	info() {
		console.log('Person name', this.name); //this - тот же объект
	},
};
*/

// console.log(person);
// person.greet();
// person.arrow();
// person.info();

// как обращаться к ключам:

/* console.log(person.adress);
const addressKey = 'address'; //динамический ключ
console.log(person[addressKey]);
console.log('complex key');
*/

/* внесение изменений в объекты
person.age++;
console.log(person.age);


person.languages.push('de'); // в конец
console.log(person.languages); // ['ru', 'en', 'de']
person.languages.pop(); // из конца
console.log(person.languages); //['ru', 'en']
person.languages.shift(); // из начала
console.log(person.languages); // ['en']
person.languages.unshift('de'); //  в начало
console.log(person.languages); // ['de', 'en']

person.address.city = 'MO'; // изменили city
console.log(person.address.city);
*/

/* Удаление данных


person.address = undefined;
console.log(person.address); // изменили данные внутри адреса undefined

// удаление ключей:
delete person.address;
console.log(person); // полностью удалили 
 */

/* Деструкторизация
 */

// const age = person.age
// const name = person.name
// const languages = person.languages
// слишком много повторений кода: 'name', person...

/*
const { age, name: fi, languages } = person;
console.log(languages, age, name);
*/

/* Classes
 
class Person {
	constructor(name, age) {
		this.name = name ?? 'Undefined name';
		this.age = age;
	}
	//создадим методы
	sayHello() {
		console.log('Hello from', this.name);
	}
}

const person1 = new Person('Vladimir', 28);
const person2 = new Person('Anna', 26);

// console.log(person1, person2);
person1.sayHello();
person2.sayHello();
*/

/* 04-object task 1
 
class Circle {
	constructor(radius) {
		this.radius = radius;
	}
	getArea() {
		return (3.1415926535 * Math.pow(circle.radius, 2)).toFixed(2);
	}
}

const circle = new Circle(5);
console.log(circle.getArea()); // "78.54"
*/

/* 04-object task 2
 
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	priceWithDiscount(number) {
		return this.price - this.price * (number / 100);
	}
}

const product = new Product('Phone', 1000);
console.log(product.priceWithDiscount(10)); // 900
console.log(product.priceWithDiscount(20)); // 800
*/

/* 04-object task 3
 
class Person {
	constructor() {
		this.friends = [];
	}
	addFriend(name) {
		this.friends.push(name);
	}
	showFriends() {
		// console.log(this.friends.toString())
		console.log(this.friends.splice('').join(', '));
	}
}

const person = new Person();
// console.log(person.friends);
person.addFriend('Иван');
person.addFriend('Сергей');
person.addFriend('Игорь');
console.log(person.friends);
person.showFriends(); // Иван, Сергей, Игорь
*/

/* 04-object task 4
 
class Animal {
	constructor(name, favoriteFood) {
		this.name = name;
		this.favoriteFood = favoriteFood;
	}
	makeSound() {}
	sayName() {
		console.log(`My name is ${this.name}`);
	}
	sayInfo() {
		console.log(`${this.name}' favorite food is ${this.favoriteFood}`);
	}
}

class Dog extends Animal {
	makeSound() {
		console.log('Gav!');
	}
}

class Cat extends Animal {
	makeSound() {
		console.log('Meow');
	}
}

const dog = new Dog('Rex', 'Meat');
// console.log(dog);
const cat = new Cat('Barsik', 'Fish');
// console.log(cat);

cat.makeSound(); // Meow
dog.makeSound(); // Gav!

dog.sayName(); // My name is Rex
cat.sayName(); // My name is Barsik

dog.sayInfo(); // Rex's favorite food is Meat
cat.sayInfo(); // Barsik's favorite food is Fish
*/

/* 04-object task 5

const foo = {
	a: 5,
	bar: function () {
		console.log(this.a);
	},
	baz: () => {
		console.log(this.a);
	},
};

foo.bar(); // 5
foo.baz(); // undefined т.к. обращается к глобальному this
*/


/* 04-object task 6
 */
