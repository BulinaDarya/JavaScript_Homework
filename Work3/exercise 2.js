//Задание 2
//Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
//Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let wages = +prompt("Salary", "");

if (!parseInt(wages)) {
        alert(`Enter salary as a number`);}
    else {
        let salary = 1;
        salary = wages * 87 / 100;
  
        console.log(`Salary before tax ${salary}`); 
            
    }