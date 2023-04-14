alert('Добро пожаловать!');
alert('У меня есть 4 переменных с разными типами данных');

let num = 123;
let bigNum = 1123456789n;
let str = "JavaScript";
let bln = false;

alert(num);
alert(typeof(num));

alert(bigNum);
alert(typeof(bigNum));

alert(str);
alert(typeof(str));

alert(bln);
alert(typeof(bln));

let opinion = confirm('Понравился ли вам наш сайт?');
alert(opinion);