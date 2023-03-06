//Задание 3
//Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
//1. Рассчитать сумму элементов этого массива
//2. Найти минимальное число
//3. Найти есть ли в этом массиве число 3

let x = Math.ceil(Math.random()*10);
let y = Math.ceil(Math.random()*10);
let a = Math.ceil(Math.random()*10);
let b = Math.ceil(Math.random()*10);
let c = Math.ceil(Math.random()*10);
const random = [x, y, a, b, c];
console.log(random);

let sum = random.map(i=>x+=i, x=0).reverse()[0]
console.log(sum);

let min = Math.min(...random);
console.log(min);

function find(random) {
    for (let i = 0; i < random.length; i++) {
        if (random[i] === 3) {
            return true;
        }
    }
    return false;
}
console.log(find(random))