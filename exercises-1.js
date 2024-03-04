console.log(a);

var a = 8;

function b() {
  console.log(a);
  a = 15;

  console.log(a);
}
b();

//

console.log([] == []);
console.log(+[]);

//

const result = "ананас" > "яблоко";
console.log(result);

//

console.log(-null == "0")

//

console.log(0o17 == '017');
console.log(18 == '018');

//

var count = 100

function getCount () {
  if (count){
    var count = 101
  }
  console.log(count)
}
getCount()

//

// let a1 = 'Hello';
// if (1 === 1) {
//   console.log(a1);
//   //var a1 = 'World';
// }
//Что будет в консоле
//Что измениться если закомментировать строчку 68

// Context

const sayHello = () => console.log(`Hi,I'm ${this.name}`);
const person = {
  name: 'Ivan',
  sayHello: function () {
    sayHello.call(this);
  }, introduceMyself() {
    console.log(`Hi,I'm ${this.name}`);
  }, introduceMyself2: () => {
    console.log(`Hi,I'm ${this.name}`);
  },
};
const anotherPerson = {name: 'Igor', ago: 23};
sayHello(); //1...
person.sayHello(); //2...
person.introduceMyself(); //3...
person.introduceMyself2(); //4...
person.introduceMyself.apply(anotherPerson);//5...
person.introduceMyself2.bind(anotherPerson)();//6...

//
const obj = {
    num: 3,
}

function mul(a) {
  return this.num * a;
}

mul = mul.bind(obj, 2);
obj.num = 6;
mul = mul.bind(null);

console.log( mul(3) ); 
console.log( mul(4) ); 
console.log(mul(5));

//
const theObj = {
  name: "Pavel",
  doLogThis: function () {
    console.log("this is", this)
  }
}
setTimeout(theObj.doLogThis, 1)

//
const object = {
  message: 'Hello, World!',

  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  }
};
console.log(object.getMessage());

//
let foo = {
  baz: function () {
    console.log(this);
  }
}
foo.baz();

let bar = foo.baz;
bar()

var name = 'Jane';
const person1 = {
  name: 'John',
  surname: 'Doe',
  sayHello: () => console.log(`Hi, ${this.name}`),
};

person.sayHello()

//
let studentIvan = {
  nameStudent: 'Иван Иванов',
  disciplines: ['Программирование', 'Машиностроение', 'Английский'],

  showDisciplines() {
    this.disciplines.forEach(function (el) {
      console.log(`${this.nameStudent} в университете изучает:${el}`);
    });
  },
};

studentIvan.showDisciplines();

//to have nameStudent ${this.nameStudent} here in console.log
// let studentIvan = {
//   nameStudent: 'Иван Иванов',
//   disciplines: ['Программирование', 'Машиностроение', 'Английский'],

//   showDisciplines() {
//     this.disciplines.forEach((el) => {
//       console.log(`${this.nameStudent} в университете изучает:${el}`);
//     });
//   },
// };

// studentIvan.showDisciplines();

//
let studentIvan = {
  nameStudent: 'Иван Иванов',
  disciplines: ['Программирование', 'Машиностроение', 'Английский'],

  showDisciplines() {
    this.disciplines.forEach(function(el){
      console.log(`${this.nameStudent} в университете изучает:${el}`);
    }.bind(this));
  },
};

studentIvan.showDisciplines();

function firstFunction() { }
function secondFunction(){}
console.log(firstFunction.__proto__===secondFunction.__proto__);
console.log(firstFunction.prototype===secondFunction.prototype);
console.log(({}).__proto__===({}).__proto__);
console.log(({}).prototype===({}).prototype);


const Person = { name: 'ivan' };

class UltraPerson extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
let user = new UltraPerson('David', 33);
console.log(user)

//
var animal = { eats: null };
var dog = { eats: true };

dog.__proto__ = animal;

console.log( dog.eats ); // ? 

delete dog.eats;
console.log( dog.eats ); // ? 

delete animal.eats;
console.log(dog.eats); // ?

//
const user = {
  name: 'Alex',
};

const animal = {
  wolf: true,
};

console.log(user.prototype === animal.prototype);//und
console.log(user.__proto__ === Object.prototype);
console.log(user.__proto__ !== animal.__proto__);
Object.setPrototypeOf(user, animal);
console.log(user.__proto__ === animal.__proto__);

//
class Person{
    constructor(name, age){
        this.#name = name; //getter/setter
        this.age = age;
    }
}
class Employee extends Person{
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    work(){
        console.log(`${this.#name} works in ${this.company}`);  
    }
}
const alex = new Employee('Alex', 25);
alex.work();

//
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__ : hamster
};

let lazy = {
  __proto__ : hamster
};

speedy.eat("apple");
console.log( speedy.stomach );
console.log( lazy.stomach );

//
let Employee = {
  company: "xyz",
};
let emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company);

//
console.log('1');
setTimeout(() => console.log('2'), 1);
let promiseNew = new Promise((resolve) => {
console.log('3');
resolve();
});
promiseNew.then(() => console.log('4'));
setTimeout(() => console.log('5'));
console.log('6');

//
let promiseTree = new Promise((resolve, reject) => {
resolve("a");
console.log("1");
setTimeout(() => {
console.log("2");
}, 0);
console.log("3");
});

//
let promiseTwo = new Promise((resolve, reject) => {
resolve("a");
});
promiseTwo
.then((res) => {
return res + "b";
})
.then((res) => {
return res + "с";
})
.finally((res) => {
return res + "!!!!!!!";
})
.catch((res) => {
return res + "d";
})
.then((res) => {
console.log(res);
});

//
function doSmth() {
return Promise.resolve("123");
}
doSmth()
.then(function (a) {
  console.log("1", a); 
  return a;
})
.then(function (b) {
console.log("2", b);

return Promise.reject("321");
})
.catch(function (err) {
console.log("3", err);
})
.then(function (c) {
console.log("4", c);
return c;
});

//
console.log("1");
setTimeout(function () {
console.log("2");
}, 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

//
function indexDelay(array){
  for (let i = 0; i < array.length; i++){
    {
      setTimeout(() => {
        console.log(i);
      }, 3000 * i)
    }
  }
}

const array = [1, 2, 3]
indexDelay(array)