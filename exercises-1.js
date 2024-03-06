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

const result = 'ананас' > 'яблоко';
console.log(result);

//

console.log(-null == '0');

//

console.log(0o17 == '017');
console.log(18 == '018');

//

var count = 100;

function getCount() {
  if (count) {
    var count = 101;
  }
  console.log(count);
}
getCount();

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
  },
  introduceMyself() {
    console.log(`Hi,I'm ${this.name}`);
  },
  introduceMyself2: () => {
    console.log(`Hi,I'm ${this.name}`);
  },
};
const anotherPerson = { name: 'Igor', ago: 23 };
sayHello(); //1...
person.sayHello(); //2...
person.introduceMyself(); //3...
person.introduceMyself2(); //4...
person.introduceMyself.apply(anotherPerson); //5...
person.introduceMyself2.bind(anotherPerson)(); //6...

//
const obj = {
  num: 3,
};

function mul(a) {
  return this.num * a;
}

mul = mul.bind(obj, 2);
obj.num = 6;
mul = mul.bind(null);

console.log(mul(3));
console.log(mul(4));
console.log(mul(5));

//
const theObj = {
  name: 'Pavel',
  doLogThis: function () {
    console.log('this is', this);
  },
};
setTimeout(theObj.doLogThis, 1);

//
const object = {
  message: 'Hello, World!',

  getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
  },
};
console.log(object.getMessage());

//
let foo = {
  baz: function () {
    console.log(this);
  },
};
foo.baz();

let bar = foo.baz;
bar();

var name = 'Jane';
const person1 = {
  name: 'John',
  surname: 'Doe',
  sayHello: () => console.log(`Hi, ${this.name}`),
};

person.sayHello();

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
    this.disciplines.forEach(
      function (el) {
        console.log(`${this.nameStudent} в университете изучает:${el}`);
      }.bind(this)
    );
  },
};

studentIvan.showDisciplines();

function firstFunction() {}
function secondFunction() {}
console.log(firstFunction.__proto__ === secondFunction.__proto__);
console.log(firstFunction.prototype === secondFunction.prototype);
console.log({}.__proto__ === {}.__proto__);
console.log({}.prototype === {}.prototype);

const Person = { name: 'ivan' };

class UltraPerson extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
let user = new UltraPerson('David', 33);
console.log(user);

//
var animal = { eats: null };
var dog = { eats: true };

dog.__proto__ = animal;

console.log(dog.eats); // ?

delete dog.eats;
console.log(dog.eats); // ?

delete animal.eats;
console.log(dog.eats); // ?

//
const user = {
  name: 'Alex',
};

const animal = {
  wolf: true,
};

console.log(user.prototype === animal.prototype); //und
console.log(user.__proto__ === Object.prototype);
console.log(user.__proto__ !== animal.__proto__);
Object.setPrototypeOf(user, animal);
console.log(user.__proto__ === animal.__proto__);

//
class Person {
  constructor(name, age) {
    this.#name = name; //getter/setter
    this.age = age;
  }
}
class Employee extends Person {
  constructor(name, age, company) {
    super(name, age);
    this.company = company;
  }
  work() {
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
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

speedy.eat('apple');
console.log(speedy.stomach);
console.log(lazy.stomach);

//
let Employee = {
  company: 'xyz',
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
  resolve('a');
  console.log('1');
  setTimeout(() => {
    console.log('2');
  }, 0);
  console.log('3');
});

//
let promiseTwo = new Promise((resolve, reject) => {
  resolve('a');
});
promiseTwo
  .then((res) => {
    return res + 'b';
  })
  .then((res) => {
    return res + 'с';
  })
  .finally((res) => {
    return res + '!!!!!!!';
  })
  .catch((res) => {
    return res + 'd';
  })
  .then((res) => {
    console.log(res);
  });

//
function doSmth() {
  return Promise.resolve('123');
}
doSmth()
  .then(function (a) {
    console.log('1', a);
    return a;
  })
  .then(function (b) {
    console.log('2', b);

    return Promise.reject('321');
  })
  .catch(function (err) {
    console.log('3', err);
  })
  .then(function (c) {
    console.log('4', c);
    return c;
  });

//
console.log('1');
setTimeout(function () {
  console.log('2');
}, 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');

//
function indexDelay(array) {
  for (let i = 0; i < array.length; i++) {
    {
      setTimeout(() => {
        console.log(i);
      }, 3000 * (i + 1));
    }
  }
}

const array = [1, 2, 3];
indexDelay(array);

//
const myPromise = Promise.resolve(Promise.resolve('1'));

function funcOne() {
  myPromise.then((res) => res).then((res) => console.log('2', res));
  setTimeout(() => console.log('3'), 3000);
  console.log('4');
}

async function funcTwo() {
  const res = await myPromise;
  console.log('5', await res);
  setTimeout(() => console.log('6'), 1000);
  console.log('7');
}

funcOne();
funcTwo();

//
const promise1 = Promise.resolve().then(() => {
  console.log('1');
  const timer1 = setTimeout(() => {
    console.log('2');
  }, 0);
});

const timer2 = setTimeout(() => {
  console.log('3');
  const promise2 = Promise.resolve().then(() => {
    console.log('4');
  });
}, 0);

//
Promise.resolve('A')
  .then(function (a) {
    console.log(2, a);
    return 'B';
  })
  .then(function (a) {
    Promise.resolve('C')
      .then(function (a) {
        console.log(7, a);
      })
      .then(function (a) {
        console.log(8, a);
      });
    console.log(3, a);
    return a;
  })
  .then(function (a) {
    Promise.resolve('D')
      .then(function (a) {
        console.log(9, a);
      })
      .then(function (a) {
        console.log(10, a);
      });
    console.log(4, a);
  })
  .then(function (a) {
    console.log(5, a);
  });
console.log(1);
setTimeout(function () {
  console.log(6);
}, 0);

//
let call = function () {
  return new Promise(function (resolve, reject) {
    resolve();
    console.log('Promise created');
  });
};

call()
  .then(function () {
    console.log('resolved');
  })
  .catch(console.log('error'));

//
const delaySucces = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, num);
  });
};

const delayFailed = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(num);
    }, num);
  });
};

async function start() {
  try {
    // result = await Promise.all([delaySucces(1000), delayFailed(2000), delaySucces(3000)]);// 1
    // result = await Promise.all([delaySucces(1000), delaySucces(2000), delaySucces(3000)]); // 2
    // result = await Promise.race([delayFailed(1000), delayFailed(2000), delaySucces(3000)]); // 3
    // result = await Promise.race([delaySucces(1000), delaySucces(2000), delaySucces(3000)]);// 4
    // result = await Promise.any([delayFailed(1000), delayFailed(2000), delaySucces(3000)]); // 5
    // result = await Promise.allSettled([delayFailed(1000), delaySucces(2000), delayFailed(3000)]); // 6
    console.log('result:', result);
  } catch (error) {
    console.log('error:', error);
  }
}

start();

//
const intervalId = setInterval(() => {
  console.log('James');
}, 10);

setTimeout(() => {
  const promise = new Promise((resolve) => {
    console.log('Richard');
    resolve('Robert');
  });

  promise.then((value) => {
    console.log(value);

    setTimeout(() => {
      console.log('Michael');

      clearInterval(intervalId);
    }, 10);
  });

  console.log('John');
}, 10);

//
Promise.resolve()
  .then(() => console.log(1))
  .then(() => console.log(2));

Promise.resolve()
  .then(() => console.log(3))
  .then(() => console.log(4));

//
promise.then(f1).catch(f2);
promise.then(f1, f2);

//
console.log('start');

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

console.log('middle');

fn().then((res) => {
  console.log(res);
});

console.log('end');

//
promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      message: 'hello',
      code: 'World',
    });
  }, 10 * 1000);
});
console.log(promise2);
setTimeout(() => {
  console.log(promise2);
}, 11 * 1000);
//

console.log('Start');

setTimeout(() => {
  console.log(2);
}, 0);

const p2 = new Promise((resolve, reject) => {
  console.log(123);
});

Promise.resolve()
  .then(() => {
    console.log(0);
    return '1';
  })

  .finally((data) => {
    console.log(data);
  });

console.log('End');

//
console.log(1);
new Promise((reject, resolve) => {
  reject(2);
})
  .then((res) => {
    console.log(res);
    return Promise.reject(3);
  })
  .then(
    (res) => {
      console.log(res);
      return 4;
    },
    (res) => {
      console.log(res);
      return 5;
    }
  )
  .catch((err) => console.log('error', err))
  .then(console.log);
console.log(6);
