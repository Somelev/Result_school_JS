const names = ['Владимир', 'Елена', 'Игорь', 'Ксения'];

// names.push('Алёна'); // добюавить в конец
// console.log(names);

// names.unshift('Алёна'); // добавить в начало
// console.log(names);

// const firstName = names.shift();
// console.log('Names: ', names, firstName);

// const nameSecond = names.pop();
// console.log('Names: ', names, nameSecond);

// читать MDN есть на русском языке

// console.log(names.reverse()); //мутирует и меняет изначальный массив

// const newNames = names.toReversed();
// console.log(newNames); //не мутирует, создаёт новый массив
// // аналогично
// const namesSort = newNames.toSorted();
// console.log(namesSort);

// console.log(names.splice(2, 1)); // мутирует
// console.log(names.toSpliced(1, 1));
// console.log(names);

// const greatWoman = 'Елена';
// const index = names.indexOf(greatWoman);
// console.log(index);
// names[index] = 'Елена Великая';
// console.log(names[index]);
// console.log(names);

// console.log(names);
// const greatWoman = 'Елена';
// const index = names.indexOf(greatWoman);
// console.log(index);
// const newNames = names.with(index, 'Елена Великая');
// console.log(names);
// console.log(newNames);

// const capitalNames = names.map(function (name) {
// const newName = name + '!!!';
// if (name === 'Елена') {
// 	return newName;
// }
// 	return name.toUpperCase();
// });
// console.log(capitalNames);

// const capitalNames = names.map(function (name, index) {
// 	if (index === 1) {
// 		return 'Елена Великая';
// 	}
// 	return name;
// });
// console.log(capitalNames);

// console.log(names.includes('Игорь'));
// console.log(names.indexOf('Игорь111'));

const people = [
	{ name: 'Владилен', budget: 470 },
	{ name: 'Елена', budget: 5470 },
	{ name: 'Игорь', budget: 70 },
	{ name: 'Ксения', budget: 12070 },
];

console.log(people);

// let findPerson; // как найти определенное значение
// for (let person of people) {
// 	if (person.budget === 12070) {
// 		findPerson = person;
// 	}
// }
// console.log(findPerson);

// const findPerson = people.find(function (person) {
// 	return person.budget === 12070;
// 	// if (person.budget === 12070) {
// 	// 	return true;
// 	// }
// });

// const finded = people.find((p) => p.budget === 12070);

// const finded = people.findIndex(function (person) {
// 	return person.budget === 12070;
// });

// console.log(finded);
// console.log(people.with(finded, 42)); // замена значения на 42

// const filtered = people.filter(function (f) {
// 	return f.budget > 5000;
// });
// console.log(filtered); // фильтр по бюджету выводит в новый массив объектов

// let sumBudget = 0; // сложение бюджетов больше 5000 в новом массиве
// const filtered = people.filter(function (f) {
// 	return f.budget > 5000;
// });
// console.log(filtered);
// filtered.forEach(function (b) {
// 	//sumBudget += b.budget;
// 	sumBudget = sumBudget + b.budget;
// });
// console.log(sumBudget);

// сложение бюджетов больше 5000 в новом массиве и в коротком синтаксисе
// const sumBudget = people
// 	.filter((p) => p.budget > 5000)
// 	.map((p) => p.budget)
// 	.reduce((acc, p) => acc + p, 0);

// console.log(sumBudget);

const string = 'Привет, как дела?'
const reversed = string.split('').toReversed().join('') // split -разделение строки на массив по опред.символу, toReversed - переворот строки, join - объединение в строку

console.log(reversed)