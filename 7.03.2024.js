// Базовый:
// Написать функцию pattern, принимающую на вход число n и возвращающую в консоли паттерн:
// pattern(5):
//     1
//    121
//   12321
//  1234321
// 123454321
//  1234321
//   12321
//    121
//     1

// Продвинутый:
// Написать класс PaginationUtil. Класс принимает массив значений (типы не имеют значения) и число, отображающее количество элементов на странице.
// Пример реализации:
// const helper = new PaginationUtil['a','b','c','d','e','f'], 4);
// helper.pageCount(); // 2
// helper.itemCount(); // 6
// helper.pageItemCount(0); // 4
// helper.pageItemCount(1); // на последней странице - 2
// helper.pageItemCount(2); // -1, так как такой страницы нет
// pageIndex - принимает индекс элемента в массиве значений и возвращает его страницу, иначе -1
// helper.pageIndex(5); // 1
// helper.pageIndex(2); // 0
// helper.pageIndex(20); // -1
// helper.pageIndex(-10); //-1

function pattern(n) {
  let upper = [];
  for (let i = 1; i <= n; i++) {
    // строка
    let row = ' '.repeat(n - i);
    for (let j = 1; j < i; j++) {
      // числа
      row += j;
    }

    for (let j = i; j >= 1; j--) {
      row += j;
    }
    row += ' '.repeat(n - i);
    upper.push(row);
  }
  let lower = [...upper].reverse();
  lower.shift();
  return [...upper, ...lower].join('\n');
}
console.log(pattern(5));

//
class PaginationUtil {
  constructor(items, itemsPerPage) {
    this.items = items;
    this.itemsPerPage = itemsPerPage;
  }

  pageCount() {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  itemCount() {
    return this.items.length;
  }

  pageItemCount(page) {
    const totalPages = this.pageCount();
    if (page < 0 || page >= totalPages) {
      return -1;
    }
    if (page === totalPages - 1) {
      return this.items.length % this.itemsPerPage || this.itemsPerPage;
    }
    return this.itemsPerPage;
  }

  pageIndex(index) {
    if (index < 0 || index >= this.items.length) {
      return -1;
    }
    return Math.floor(index / this.itemsPerPage);
  }
}

// Пример использования
const helper = new PaginationUtil(['a', 'b', 'c', 'd', 'e', 'f'], 4);

console.log(helper.pageCount()); // 2
console.log(helper.itemCount()); // 6
console.log(helper.pageItemCount(0)); // 4
console.log(helper.pageItemCount(1)); // 2
console.log(helper.pageItemCount(2)); // -1
console.log(helper.pageIndex(5)); // 1
console.log(helper.pageIndex(2)); // 0
console.log(helper.pageIndex(20)); // -1
console.log(helper.pageIndex(-10)); // -1

//
let n = 5;
for (let i = 1; i <= n; i++) {
  let str = '*';
  let space = ' ';
  console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
}
for (let i = n - 1; i >= 1; i--) {
  let str = '*';
  let space = ' ';
  console.log(space.repeat(n - i) + str.repeat(i * 2 - 1));
}

function pattern(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    let str = ' '.repeat(n - i);
    for (let j = 1; j < i; j++) {
      str += j % 10;
    }
    for (let j = i; j >= 1; j--) {
      str += j % 10;
    }
    str += ' '.repeat(n - i);
    res.push(str);
  }
  let br = [...res].reverse();
  br.shift();
  return [...res, ...br].join('\n');
}
console.log(pattern(5));
