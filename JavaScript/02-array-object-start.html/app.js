//Theory
// const array = [1, 2, 3, 5, 20, 42];
// console.log(array);

/* object teory
const person = {
	firstName: 'Vladimir',
	lastName: 'K',
	year: 1995,
	isMarried: false,
	languages: ['ru', 'en'],
	getFullName: function () {
		console.log(person.firstname + ' ' + persone.lastName),
	}
}
console.log(person.year);
console.log(person['languages']);
const key = 'isMarried'
console.log(person[key]);
*/

/* 04.Массивы и объекты

*/

/* 1_task
 
let john = {
	name: 'John',
	age: 23,
	pet: 'dog',
};
let ann = {
	name: 'Ann',
	age: 25,
	pet: 'cat',
};

function info(object) {
	console.log(
		`Меня зовут ${object.name}, мне ${object.age}, у меня есть питомец ${object.pet}`
	);
}
info(john);
info(ann);
*/

/* 2_task
 
function sum(array) {
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		count = count + array[i];
	}
	console.log(count);
}

const arr = [1, 50, 20, 75, 90];

sum(arr); // 236
*/

/* 3_task
const names = ['Vova', 'Ivan', 'Petr', 'Elena', 'Lubov'];
console.log(names);
names.pop();
names.shift();
console.log(names);
*/

/* 4_task

const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

function render(names) {
	let element = '';
	for (let i = 0; i < names.length; i++) {
		element = element + `<li>${names[i]}</li>\n`;
	}
	console.log(`<ul class="list-group" id="list">${element}</ul>`);
}
render(names);
 */

/* 5_task
 
const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300,
};
let { age, favColor, height, pet, money } = obj;

console.log(age, favColor, height, pet, money);
*/

/* 6_task

const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300,
};

const updateObj = {
	age: 23,
	favColor: 'blue',
	money: 11450,
};

const obj2 = {
	age: obj.age,
	favColor: updateObj.favColor,
	height: obj.height,
	pet: obj.pet,
	money: updateObj.money,
};

Object.assign(obj2, obj, updateObj);

console.log(obj2);

/**
 * {
 *	age: 23,
 *	favColor: 'blue',
 *	height: 188,
 *	pet: 'dog',
 *	money: 11450
 * }
 */

/*notes
const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

// console.log(inputElement.value);

// const notes = ['завершить курс по JS', 'загрузить решение в репозиторий'];

const notes = [
	{
		title: 'завершить курс по JS',
		completed: false,
	},
	{
		title: 'загрузить решение в репозиторий',
		completed: true,
	},
];

function render() {
	listElement.innerHTML = '';
	if (notes.length === 0) {
		listElement.innerHTML = `<p>Нет элементов</p>`;
	}
	for (let i = 0; i < notes.length; i++) {
		listElement.insertAdjacentHTML(
			'beforeend',
			getNoteTemplate(notes[i]),
			i
		);
	}
	// for (let note of notes)
}
render();

createBtn.onclick = function () {
	if (inputElement.value.length === 0) {
		return;
	}

	const newNote = {
		title: inputElement.value,
		completed: false,
	};

	notes.push(newNote);
	render();
	inputElement.value = '';
};

listElement.onclick = function (event) {
	if (event.target.dataset.index) {
		// const index = Number(event.target.dataset.index) or
		const index = parseInt(event.target.dataset.index);
		const type = event.target.dataset.type;

		if (type === 'toggle') {
			notes[index].completed = !notes[index].completed;
		} else if (type === 'remove') {
			notes.splice(index, 1);
		}

		render();
	}
	// console.log(event.target.dataset.index);
};

function getNoteTemplate(note, index) {
	return `<li
	class="list-group-item d-flex justify-content-between align-items-center">
	<span class="${note.completed ? 'text-decoration-line-through' : ''}">${
		note.title
	}</span>
	<span>
	<span class="btn btn-small btn-${
		note.completed ? 'warning' : 'success'
	}" data-index ="${index}" data-type="toggle">&check;</span>
	<span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
	</span>
	</li>`;
}
*/
