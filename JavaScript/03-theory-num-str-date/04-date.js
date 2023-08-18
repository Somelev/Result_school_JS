/* текущая дата и время
// console.log(new Date());

const now = new Date();

const start = new Date(1000 * 60 * 60 * 24); //sec

const date = new Date(2011, 0, 4, 12, 42, 21); // Tue Jan 04 2011 12:42:21 ..

// console.log(start);
// console.log(date);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());

// now.setFullYear(2077); //задаём год 2077

// console.log(now);

console.log(now.toDateString()); // Wed Aug 16 2023
console.log(now.toTimeString()); // 23:11:48 GMT+0300 (Москва, стандартное время)
console.log(now.toLocaleDateString()); // 16.08.2023
console.log(now.toLocaleTimeString()); // 23:13:49
*/

// ======= AppTime

let mode = 'time';
const now = new Date();
const output = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');

//пример функции с замыканием
function bindMode(name) {
	return function () {
		mode = name;
		update();
	};
}

//пример функции буз замыкания
// timeBtn.onclick = function () {
// 	mode = 'time';
// 	update();
// };
timeBtn.onclick = bindMode('time');

dateBtn.onclick = bindMode('date');

fullBtn.onclick = bindMode('full');

setInterval(update, 1000);
update();

function update() {
	output.textContent = format(mode);
}

// Pure Function
function format(formatMode) {
	const now = new Date();
	switch (formatMode) {
		case 'time':
			return now.toLocaleTimeString();
		case 'date':
			return now.toLocaleDateString();
		case 'full':
			return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
		default:
			return now.toLocaleTimeString();
	}
}
