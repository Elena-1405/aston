// 2. Привязать контекст объекта:
// const obj = { item: 'some value' }
// к функции logger:function logger() {
//   console.log(`I output only external context: ${this.item}`);
// }
// так, чтобы при вызове функции ${this.item} имело значение - 'some value'(Привязать через bind, call, apply)

//1. Call

    const obj = { item: 'some value' }

    function logger() {
        console.log(`I output only external context: ${this.item}`);
    }
    logger.call(obj)

//2. Bind

   const obj = { item: 'some value' }; 

   function logger() {
     console.log(`I output only external context: ${this.item}`);
   }

   const boundLogger = logger.bind(obj);
    boundLogger();
   
//3. Apply

   const obj = { item: 'some value' };

   function logger() {
     console.log(`I output only external context: ${this.item}`);
   }

   logger.apply(obj);
   
   //3. Продвинутый:
// 1. Реализовать полифил (собственную функцию реализующую встроенную в js) метода bind()

// Полифил - код, позволяющий реализовать функциональность отсутствующую в старых версиях языка или старых браузерах.

function bind(func, context){

	return function(...args) {
		return func.apply(
					context,
					args
				);
	}
}

// Примеры реализации
const a = function () {
	return this;
}

const b = a.bind({foo: 'var'});

const c = b.bind(null);

const d = c.bind({ g: '1'});

console.log(c())// Вывод: { foo: 'var' }


function greet(greeting) {
  console.log(greeting + ' ' + this.name);
}

var person = { name: 'John' };

var greetJohn = greet.bind(person, 'Hello');
greetJohn(); // Вывод: Hello John


//Для создания полифила добавляем в прототип

Function.prototype.bind = function(context){
	const func = this;
	return function(...args) {

		return func.apply(
			context,
			args
		);
	}
}