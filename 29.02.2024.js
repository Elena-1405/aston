// Базовый:
// 1. Перечислить какие бывают алгоритмы сортировок?
// 2. Создать объект Person несколькими способами, после создать объект AnotherPerson, чтобы в нём были
// доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.
// 3. Создать класс SuperPerson c get и set для поля name и конструктором , сделать класс наследник от
// класса SuperPerson.

// Продвинутый:
// 1. Написать функцию
// function firstSum = (arr, total) => {//Решение
// },
// которая вернет массив с первой парой чисел, сумма которых равна total :const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const total = 13;
// firstSum(arr, total) //result = [4, 9]
// 2. Оценить сложность вашего алгоритма для функции firstSum (хотя бы пару строк в качестве объяснения).

//1. Алгоритмы сортировок:

// Сортировка пузырьком;

// Сортировка выбором;

// Циклическая сортировка;

// Быстрая сортировка;

// Сортировка пузырьком - этот алгоритм является стабильным. Сортировка пузырьком перебирает весь массив элементов, сравнивая два соседних элемента друг с другом и меняя их местами в соответствии с условиями. Элементы с большим значением опускаются вниз массива, а элементы с наименьшим значением поднимаются вверх, подобно пузырькам газа.

// Сложность алгоритма: O(n2), где n — количество элементов массива.Так как мы запускаем вложенный цикл.
// Следует использовать, когда количество входных данных невелико, так как его временная сложность составляет O(n2),где n — количество элементов массива, так как мы запускаем вложенный цикл.

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Меняем значения переменных
      }
    }
  }
};

// Сортировка выбором;
// Этот алгоритм сортировки при каждой итерации проходит по неотсортированной части массива, находит минимальный элемент и переносит его в начало массива.

// Может быть как стабильным, так и нестабильным алгоритмом, в зависимости от реализации. В данном примере приведена стабильная реализация.

// используем, когда количество входных данных невелико, так как его временная сложность составляет O(n2).

const selectedSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j; // Меняем значение переменной на наибольшее значение
      }
    }

    [arr[i], arr[min]] = [arr[min], arr[i]]; // Меняем значения переменных
  }
};

//Циклическая сортировка;

// Основной идеей алгоритма циклической сортировки является разложение массива на циклы. Затем, внутри этих циклов происходят перестановки элементов до тех пор, пока все циклы не завершатся и массив не будет отсортирован.

// Алгоритм циклической сортировки является нестабильным.

// Хотя алгоритм циклической сортировки не является простым в понимании, он ценится за то, что изменения элементов массива происходят только тогда, когда элемент ставится на своё место. Это особенно важно, если изменение элементов массива является затратным.

// Сложность алгоритма: O(n2).

function cycleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let position = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < value) {
        position++;
      }
    }
    if (position === i) {
      continue;
    }
    while (value === arr[position]) {
      // Избавляемся от дубликатов
      position++;
    }

    [arr[position], value] = [value, arr[position]]; // Меняем значения переменных

    while (position !== i) {
      // Запускаем цикл в обратную сторону
      position = i;
      for (let k = i + 1; k < arr.length; k++) {
        if (arr[k] < value) {
          position++;
        }
      }
      while (value === arr[position]) {
        // Избавляемся от дубликатов
        position++;
      }
      [arr[position], value] = [value, arr[position]]; // Меняем значения пременных
    }
  }
  return arr;
}

//Быстрая сортировка:
//Алгоритм быстрой сортировки работает следующим образом: он определяет так называемый «стержень» и разбивает массив на подмассивы относительно «стержня», которые затем сортируются.

// Этот алгоритм сортировки является нестабильным.

//Сложность алгоритма в среднем: O(n * log n).

// Сложность алгоритма в худшем случае: O(n2). Худшим для алгоритма быстрой сортировки можно назвать случай, когда опорный элемент pivot имеет максимальное или минимальное значение во всём массиве.

const partition = (arr, start, end) => {
  const pivot = arr[end]; // Определяем опорный элемент
  let i = start; // Определяем индекс, по которому делим массив на две части

  for (let j = start; j <= end - 1; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Меняем значения переменных
      i++;
    }
  }

  [arr[i], arr[end]] = [arr[end], arr[i]]; // Меняем значения переменных
  return i;
};

const quickSort = (arr, start, end) => {
  if (start < end) {
    // Условия запуска рекурсии
    const pi = partition(arr, start, end); // Получаем индекс

    quickSort(arr, start, pi - 1);
    quickSort(arr, pi + 1, end);
  }
};

//2. Создать объект Person несколькими способами, после создать объект AnotherPerson, чтобы в нём были
// доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.

// Функция-конструктор

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function AnotherPerson(name, age) {
  Person.call(this, name, age);
}

AnotherPerson.prototype = Object.create(Person.prototype);
AnotherPerson.prototype.constructor = AnotherPerson;

AnotherPerson.prototype.logInfo = function () {
  console.log('We are the champions.');
};

const person1 = new Person('John', 25);
const anotherPerson1 = new AnotherPerson('Alice', 30);

person1.sayHello(); // Output: Hello, my name is John and I am 25 years old.
anotherPerson1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
anotherPerson1.logInfo(); // Output: We are the champions.

//Использование классов:

class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

class AnotherPerson2 extends Person2 {
  logInfo() {
    console.log('We are the champions.');
  }
}

const person2 = new Person2('John', 25);
const anotherPerson2 = new AnotherPerson2('Alice', 30);

person2.sayHello(); // Output: Hello, my name is John and I am 25 years old.
anotherPerson2.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
anotherPerson2.logInfo(); // Output: We are the champions.

//3. Создать класс SuperPerson c get и set для поля name и конструктором , сделать класс наследник от
// класса SuperPerson.

class SuperPerson {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Геттеры для получения значения поля name/age
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }

  // Сеттеры для установки значения поля name/age
  set name(newName) {
    this._name = newName;
  }
  set age(newAge) {
    this._age = newAge;
  }
}

class ChildPerson extends SuperPerson {
  constructor(name, age, toy) {
    super(name, age);
    this.toy = toy;
  }
}

// Пример использования
const superPerson = new SuperPerson('John', 30);
console.log(superPerson.name + ', ' + superPerson.age); // John, 30

superPerson.name = 'Jane';
superPerson.age = 29;
console.log(superPerson.name + ', ' + superPerson.age); //  Jane, 29

const childPerson = new ChildPerson('Bob', 5, 'TeddyBear');
console.log(childPerson.name + ', ' + childPerson.age + ', ' + childPerson.toy); //  Bob, 5, TeddyBear

// Продвинутый:
// 1. Написать функцию
// function firstSum = (arr, total) => {//Решение
// },
// которая вернет массив с первой парой чисел, сумма которых равна total :const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const total = 13;
// firstSum(arr, total) //result = [4, 9]
// 2. Оценить сложность вашего алгоритма для функции firstSum (хотя бы пару строк в качестве объяснения).

//Данное решение достаточно энергозатратно, поскольку задействует 2 цикла. Сложность оценивается как O(n^2). При увеличении массива время на выполнение будет увеличиваться квадратично. Способ подойдет при работе с небольшими массивами.

function firstSum(arr, total) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        result.push([arr[i], arr[j]]);
        return result[0];
      }
    }
  }

  return result[0] || [];
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
console.log(firstSum(arr, total)); //[ 4, 9 ]
