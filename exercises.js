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

let a = 'Hello';
if (1 === 1) {
  console.log(a);
  //var a = 'World';
}
//Что будет в консоле
//Что измениться если закомментировать строчку 68