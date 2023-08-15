// const num = 42; //integer
// const float = 42.42; // float in language C
// const pow = 10e3; // 10 в 3 степени
// const big = 1_000_000; // '_' используется для удобства чтения больших чисел
// const negativ = -10;

// console.log(Number.MAX_SAFE_INTEGER); // самое большое безопасное число для манипуляций
// console.log(Math.pow(2, 53) - 1); // возведение в степень для получения предыдущего безопасного числа
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.POSITIVE_INFINITY); // спец обозначение для бесконечности
// console.log(Number.NEGATIVE_INFINITY); // обратное
// // console.log(1 / 0);
// console.log(Number.isFinite(1 / 0)); // false , спрашивает конечно ли значение 1 / 0
// console.log(23 / undefined); //значение Nun является числом

// const weird = 23 / undefined;
// console.log(Number.isNaN(weird));
// console.log(Number.isNaN(23));

// Парсинг значений

// const strInt = '42';
// const strFloat = '42.42';
// console.log(Number(strInt)); // 42
// console.log(Number(srtFloat)); // 42.42

// console.log(Number.parseInt(strInt)); // можно  использовать без Number
// console.log(parseInt(strFloat)); // 42 приводит к integer
// console.log(parseFloat(strFloat)); // 42.42
// console.log(+strInt, strFloat); // '+' приводит к числу

//console.log(0.1 + 0.2); //0.30000000000000004 работу с дробными числами нужно хорошо проверять
// console.log(+(0.1 + 0.2).toFixed(10));
// const fixed = (0.1 + 0.2).toFixed(10);
// console.log(parseFloat(fixed)); // 0.3

// BigInt
