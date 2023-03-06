//Задание 1
//Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
//0 – это ноль
//1 – нечетное число
//2 – четное число
//3 – нечетное число
//10 – четное число

const integer  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for(let i = 0; i <integer[integer.length - 1]; i++) {
    if (i === 0) {
        console.log(`{i} it's zero`);
    } else if (i % 2 === 0) 
        {console.log(`{i} even number`) 
        } else {
        console.log(`{i} odd number`)
        }   
    }