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

   //const obj = { item: 'some value' }; закомментировала, тк obj одинаковый во всех случаях

   function logger() {
     console.log(`I output only external context: ${this.item}`);
   }

   const boundLogger = logger.bind(obj);
boundLogger();
   
//3. Apply

   //const obj = { item: 'some value' };

   function logger() {
     console.log(`I output only external context: ${this.item}`);
   }

   logger.apply(obj);
   
   
