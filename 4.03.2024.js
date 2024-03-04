// 4.03.2024

// Базовое:
// Решить (без использования IDE, естественно) типовые задачи - написать порядок и вывод в консоли:
// 1)
// console.log('1');
// setTimeout(() => console.log('2'), 1);
// let promiseNew = new Promise((resolve) => {
// console.log('3');
// resolve();
// });
// promiseNew.then(() => console.log('4'));
// setTimeout(() => console.log('5'));
// console.log('6');
// 2)
// let promiseTree = new Promise((resolve, reject) => {
// resolve("a");
// console.log("1");
// setTimeout(() => {
// console.log("2");
// }, 0);
// console.log("3");
// });
// 3)
// let promiseTwo = new Promise((resolve, reject) => {
// resolve("a");
// });
// promiseTwo
// .then((res) => {
// return res + "b";
// })
// .then((res) => {
// return res + "с";
// })
// .finally((res) => {
// return res + "!!!!!!!";
// })
// .catch((res) => {
// return res + "d";
// })
// .then((res) => {
// console.log(res);
// });
// 4)
// function doSmth() {
// return Promise.resolve("123");
// }
// doSmth()
// .then(function (a) {
// console.log("1", a); //
// return a;
// })
// .then(function (b) {
// console.log("2", b);
// return Promise.reject("321");
// })
// .catch(function (err) {
// console.log("3", err);
// })
// .then(function (c) {
// console.log("4", c);
// return c;
// });
// 5)
// console.log("1");
// setTimeout(function () {
// console.log("2");
// }, 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");

1. 
//1 3 6 4 2 5 (все по порядку согласно очереди (синхронные console.log('1'); console.log('3'); console.log('6');, асинхронные: промис promiseNew.then(() => console.log('4'));, setTimeouts: setTimeout(() => console.log('2'), 1); setTimeout(() => console.log('5'));))

2. 
// 1 3 2 ("a" не выводится в console.log,она передается в then, по выполнению операций порядок:console.log("1");console.log("3"); Promise.resolve("a"),setTimeout(() => {
// console.log("2");
// }, 0))

3. 
// a b c (первый resolve передается в promiseTwo
// .then((res) в качестве res, к res добывляем b, затем с, finally выполняется, но не влияет на результат, .catch игнорируем, тк произошел resolve)

4. 
// 1 123
// 2 123
// 3 321
// 4 undefined
// (resolve("123") передается в then(function (a), а затем следующему обработчику, затем отклонение промиса Promise.reject("321"), но это значение далее не передается, поэтому в 4 undefined)

5. 
// 1 4 3 2 (все по порядку согласно очереди (синхронные console.log("1"),console.log("4") асинхронные: промис Promise.resolve().then(() => console.log("3"));, setTimeout с 2))


// Продвинутое:
// Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.


function indexDelay(array) {
  for (let i = 0; i < array.length; i++){
    {
      setTimeout(() => {
        console.log(i);
      }, 3000 * i)
    }
  }
}

const array = [1, 2, 3, 4, 5]
indexDelay(array)