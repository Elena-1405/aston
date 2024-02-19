//19.02.2024 

// 1. Написать функцию getLength, принимающую на вход валидное JS значение любого типа. 
// Функция должна вывести в консоль длину (length) этого значения, 
// если это возможно, иначе вывести в консоль 0.

function getLength(value) {
    const valueLength = value && value.length !== undefined ? value.length : 0;
    console.log(valueLength);
}

//Проверка
getLength('6') //1
getLength(4) //0
getLength([1, 2, 6]) //3


// 2. Дан объект Node со структурой ’Tree’ Node: value: <number>, left: <Node> | undefined, right: <Node> | undefined 
//Структура объекта может быть очень большой (условно содержать миллион Node). Напишите функцию compare, принимающую на вход два объекта Node, 
//и возвращающую true, если они имеют одинаковую структуру и значения и false в ином случае. 
//Пример: 1 1 | \ | \ 2 3 2 3 => true 1 1 | \ | \ 3 3 2 3 => false (значения не одинаковые 2 != 3) 1 1 | \ | 2 3 2 | 3 => false (разная структура)

    function compare(node1, node2) {
    
    const objKeys1 = Object.keys(node1);
    const objKeys2 = Object.keys(node2);
    
    if (objKeys1.length !== objKeys2.length) return false;
    
    for (var key of objKeys1) {
    const value1 = node1[key];
    const value2 = node2[key];

    const isObjects = isObject(value1) && isObject(value2);
   
    if ((isObjects && !compare(value1, value2)) ||
    (!isObjects && value1 !== value2)
    ){
        return false;
    }
    }
        return true;
    };
    
    const isObject = (object) => {
    return object != null && typeof object === "object";
    };
    
    //Проверка
    const tree1 = { value: 1, left: { value: 2 }, right: { value: 3 } };
    const tree2 = { value: 1, left: { value: 2 }, right: { value: 3} };
    console.log(compare(tree1, tree2)); //true

    const tree3 = { value: 1, left: { value: 2 }, right: { value: 3 } };
    const tree4 = { value: 1, left: { value: 3 }, right: { value: 5} };
    console.log(compare(tree3, tree4)); //false

    