const person = {
	name: 'Vladimir',
	age: 28,
	isYoutuber: true,
	languages: ['ru', 'en'],
	adress: {
		city: 'Moscow',
		street: 'Moscowskuy prospect',
	},
	'compkex key': 'complex value',
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

console.log(person);
person.greet();
person.arrow();
person.info();
