//Задание 1 – Создать объект counter всеми возможными способами.

//1.  Литеральная нотация
const counter1 = { key: 'value', anotherKey: 1 };
       
//2. Object.create()

const counter2 = Object.create(null);
    counter2.key = 'value';
    counter2.anotherKey = 1;
        
//3. new Object()

const counter3 = new Object();
   counter3.key = 'value';
   counter3.anotherKey = 1;
    

//4. Функция-конструктор

    function MyObject() {
    this.key = 'value';
    this.anotherKey = 1;
}
   const counter4 = new MyObject();

//5. Class

   class MyClass {
     constructor() {
       this.key ='value';
       this.anotherKey = 1;
     }
   }
   const counter5 = new MyClass();

//6. Object.assign

   const counter6 = Object.assign({}, { key: 'value', anotherKey: 1 });

//7. spread

   const counter7 = { ...{ key: 'value', anotherKey: 1 } };

//8. JSON.parse():
   
    const jsonString = '{"key":"value","anotherKey":42}';
   const counter8 = JSON.parse(jsonString);
   

//Задание 2 – Скопировать объект counter всеми возможными способами;

//1.Object.assign

   const originalObj1 = { key: 'value', anotherKey: 1 };
   const counter9 = Object.assign({}, originalObj1);
   
//2. spread

   const originalObj2 = { key: 'value', anotherKey: 1 };
   const counter10 = { ...originalObj2 };

//3. JSON.parse() and JSON.stringify()(имеет ограничения):

   const originalObj3 = { key: 'value', anotherKey: 1};
   const counter11 = JSON.parse(JSON.stringify(originalObj3));

//4. Object.create()

   const originalObj4 = { key: 'value', anotherKey: 1 };
   const counter12 = Object.create(Object.getPrototypeOf(originalObj4), Object.getOwnPropertyDescriptors(originalObj4));
   
//5.  с помощью сторонних библиотек, например  lodash  

   const originalObj = { key: 'value', anotherKey: 1 };
   const counter13 = _.cloneDeep(originalObj);
 
//6. structuredClone() new method

    const original = { key: 'value', anotherKey: 1 };
    original.itself = original;

    const counter14 = structuredClone(original);

//7. Функция-конструктор

   function CopyConstructor(original) {
     this.key = original.key;
     this.anotherKey = original.anotherKey;
   }
   const counter15 = new CopyConstructor(originalObj);
    

//Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;

//1. Function Declaration:

   function makeCounter1() {
     // function body
   }

//2. Function Expression:

   const myFunction = function() {
     // function body
   };
   
//3. Arrow Function (ES6+):

   const myFunction = function() {
     // function body
   };
   
//4. Named Function Expressions (NFE)

   const myFunction = function myNamedFunction() {
     // function body
   };

//5. Function Constructor:

   const myFunction = new Function('arg1', 'arg2', 'return arg1 + arg2;');

//6.  Immediately Invoked Function Expression (IIFE):

   (function() {
     // function body
   })();

//7. Generator Function (ES6+):
   function* myGenerator() {
     // function body
   }

//8. Async Function (ES2017+):

   const myAsyncFunction = async () => {
     // async function body
   };
   
//9. Метод внутри обьекта

   const myObject = {
     myMethod() {
       // method body
     }
   };

//10. Метод внутри класса

    class MyClass {
      myMethod() {
        // method body
      }
    }
    
   
   
   
   
   




   

//Продвинутое:
//Задание 1 – Развернуть строку в обратном направлении при помощи методов массивов:
//function reverseStr(str) {
//return …
//}

//Задание 2– Написать функцию глубокого сравнения двух объектов:
//const obj1 = { here: { is: 'on', other: '3' }, object: Z };
//const obj2 = { here: { is: 'on', other: '2' }, object: Z };
//const deepEqual = (obj1, obj2) => {};
