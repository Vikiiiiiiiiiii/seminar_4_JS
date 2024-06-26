//                     Текст задания 1
// 1. Создайте массив с элементами 1, 2, 3. Выведите на экран
// каждый из этих элементов.

const arr = [1, 2, 3];
arr.forEach(value => {
    console.log(value);
})

// 2. Создайте массив с произвольными элементами.
// Выведите на экран количество элементов в этом
// массиве.

const array = [1, 7, 3, 1, 9];
console.log(array.length);   // 5

// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
// первого элемента число 1, вместо второго - 2, вместо
// третьего - 3.

const ar = ['a', 'b', 'c'];
console.log(ar);     // (3) ['a', 'b', 'c']

ar[0] = 1; 
ar[1] = -2;
ar[2] = -3; 
console.log(ar);     // (3) [1, -2, -3]

//                     Текст задания 2
// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
// увеличьте каждый элемент массива на единицу.

const arrays = [1, 2, 3];
for (let i = 0; i < arrays.length; i++) {
    arrays[i]++;
}
console.log(arrays);

// 2. Узнайте длину следующего массива:
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';     // Ответ: 9


// 3. Пусть дан такой массив:
// const arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.

const arra = [1, 2, 3];
arra.push(4);
arra.push(5);
console.log(arra);   // (5) [1, 2, 3, 4, 5]

// 4. Создайте произвольный массив из 5 элементов, Удалите из него два
// элемента. Проверьте, какое станет значение свойства length после
// этого.

const arR = [5, 8, 0, 7, 2];
arR.pop();
arR.pop();

console.log(arR);        // (3) [5, 8, 0]
console.log(arR.length); // 3  (массив из трех элементов)

//                     Текст задания 3
// 1. С помощью цикла for выведите в консоль числа от 11 до 33.

for (let i = 11; i < 34; i++){
    console.log(i);
}

// 2. С помощью цикла for выведите в консоль нечетные числа в
// промежутке от 1 до 99.

for (let i = 1; i < 100; i = i+2){
    console.log(i);
}

// 3. С помощью цикла for выведите в консоль числа от 100 до 0.

for (let i = 100; i >= 0; i--){
    console.log(i);
}

// 4. Дано число num с неким начальным значением. Умножайте его на 3
// столько раз, пока результат умножения не станет больше 1000.
// Какое число получится? Посчитайте количество итераций,
// необходимых для этого.

// let num = 15;
// let i = 0;
// while (num < 1000) {
//     num = num * 3;
//     i++;
// }

// console.log(i, num);    // 4 (кол-во итераций) 1215 (число, которое получили)


//                     Текст задания 4 
// 1. Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3-х, но
// меньше 10.

const aRR = [2, 5, 9, 15, 1, 4];
aRR.map(value => {
    if(value > 3 && value < 10){
        console.log(value);           // 5 9 4 
    }
});

// 2. Найдите сумму четных чисел от 2 до 100.

// let sum = 0;
// for (let i = 2; i <= 100; i = i + 2){
//     sum = sum + i;
// }
// console.log(sum);

// 3. Дан массив const = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.

const ARR = [2, 5, 9, 3, 1, 4];
let sum = 0;

ARR.forEach(function(value) {
    sum = sum + value;
});
console.log(sum);             // 24

// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

let str = "-";
for (let i = 1; i <= 9; i++){
    str = str + i + "-";
}
console.log(str);

// 5. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
// который будет по очереди выводить элементы этого массива в
// консоль до тех пор, пока не встретится элемент со значением 0.
// После этого цикл должен завершить свою работу.

// const arrr = [2, 5, 9, 0, 3, 1, 4];
// let i = 0;
// while (arrr[i] !== 0 && i < arrr.length) {
//     console.log(arrr[i]);         // 2 5 9 
//     i++;
// }


//                     Текст задания 5
// 1. Пусть у нас дан массив состоящий из 10 элементов с
// произвольными числами. Давайте переберем его циклом и числа,
// которые делятся на 2, возведем в квадрат и выведем в консоль, а
// числа, которые делятся на 3, возведем в куб и выведем в консоль.

// const arrr = [2, 5, 9, 10, 3, 1, 0];
// const arrNew = arrr.map (value => {
//     return value % 2 === 0 ? Math.pow(value, 2) : (value % 3 === 0 ? Math.pow(value, 3) : value);
// });
// console.log(arrNew);       // (7) [4, 5, 729, 100, 27, 1, 0]

// 2. Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.

// const arrr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// arrr.forEach (value => {
//     if (value === 3) {
//         count++;
//     }
// });
// console.log(count);        // 4

// 3. Дан следующий массив:
// [1, 2, 3, 4, 5]
//    С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]

const arrr = [1, 2, 3, 4, 5];
arrr.splice(1, 2);           // 1й - индекс с которого удалять элементы, 2й - кол-во элементов , которые удалить
console.log(arrr);           // (3) [1, 4, 5]

// arrr.splice(1, 2, 999);   // 3й - (999) - мы можем добавить элемент, на место уже удалённых элементов