//7.03.2024
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
  let upperPart = [];
  // строка
  for (let i = 1; i <= n; i++) {
    let row = ' '.repeat(n - i);
    // числа на возр.
    for (let j = 1; j < i; j++) {
      row += j;
    }
    // числа на убыв.
    for (let j = i; j >= 1; j--) {
      row += j;
    }
    row += ' '.repeat(n - i);
    upperPart.push(row);
  }
  //создаем нижнюю часть и соединяем
  let lowerPart = [...upperPart].reverse();
  lowerPart.shift(); //удаляем повтор.элемент
  return [...upperPart, ...lowerPart].join('\n');
}
// Пример использования
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
