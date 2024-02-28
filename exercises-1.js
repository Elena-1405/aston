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
