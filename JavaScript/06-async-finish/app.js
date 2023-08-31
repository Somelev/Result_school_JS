/*introduction to JSON
const car = {
	model: 'Tesla',
	year: 2023,
};

const json = JSON.stringify(car);
console.log(json);
const parsed = JSON.parse(json);
console.log(parsed);
*/

// const list = document.getElementById('list'); // или
const list = document.querySelector('#list');
const filter = document.querySelector('#filter');
let USERS = [];

//правильное добавление методов, принимает 2 параметра(событие и колбэк). Например 'click', 'input'

filter.addEventListener('input', (event) => {
	const value = event.target.value.toLowerCase(); // или
	// const { value } = event.target; // деструкторизация
	const filteredUsers = USERS.filter((user) =>
		user.name.toLowerCase().includes(value)
	); // проверяем совпадают ли данные в строке;
	render(filteredUsers);
});

async function start() {
	list.innerHTML = 'Loading...';
	try {
		const resp = await fetch('https://jsonplaceholder.typicode.com/users'); // можно добавлять{metod: 'GET'}// современный метод запросов (почитать get, post)
		//fetch возвращает промис
		const data = await resp.json();
		setTimeout(() => {
			USERS = data;
			render(data);
		}, 3000);
	} catch (err) {
		list.style.color = 'red';
		list.innerHTML = err.message;
	}
}

function render(users = []) {
	if (users.length === 0) {
		list.innerHTML = 'No mached users!';
	} else {
		const html = users.map(toHTML).join('');
		list.innerHTML = html;
	}
}

function toHTML(user) {
	return `
		<li class="list-group-item">${user.name}</li>
	`;
}

start();
