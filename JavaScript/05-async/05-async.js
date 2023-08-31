// Event Loop

// const timeout = setTimeout(() => {
// 	console.log('after 2 seconds');
// }, 2000);

// clearTimeout(timeout);

// setTimeout(() => {
// 	console.log('after 3 seconds');
// }, 3000);
// // after 3 seconds ( 1 вызов очистился)

//мини таймер
// let counter = 0;
// setInterval(() => {
// 	console.log('tick', ++counter);
// }, 1000);

// function delay(callback, time = 1000) {
// 	setTimeout(callback, time);
// }
//не эффективно
// delay(() => {
// 	console.log('timeout');
// }, 2000);

//Promises

// const delay = (time = 1000) => {
// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve([1, 2, 3]); //передаём данные
// 			// reject('Error in delay'); // если данные не получены
// 		}, time); //ассинхнонность
// 	});
// 	return promise;
// };

// delay(2500)
// 	.then((data) => {
// 		// console.log('Timeout'); // запусти delay через 2,5 сек
// 		console.log('Timeout', data);
// 		return data.map((x) => x ** 2);
// 	})
// 	.then((data) => {
// 		console.log(data); // chain или цепочка из .then()
// 	})
// 	.catch((err) => {
// 		console.log(err); // отлов ошибок
// 	})
// 	.finally(() => console.log('Finally')); // вывод в конце

// или можно использовать способ ниже, он лучше
// const getData = () => new Promise((resolve) => resolve([1, 2, 3]));
// async function asyncExample() {
// 	try {
// 		await delay(3000); // выведи через 3 секунды
// 		const data = await getData();
// 		console.log(data);
// 	} catch (err) {
// 		console.log(err);
// 	} finally {
// 		console.log('Finally');
// 	}
// }
// asyncExample();
