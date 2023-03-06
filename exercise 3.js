 //Задание 3
//Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел


let first = +prompt("Enter first number", "");
let second = +prompt("Enter second number", "");
let third = +prompt("Enter third number", "");
let max = Math.max(first, second, third);
alert(`Max number - ${max}`);