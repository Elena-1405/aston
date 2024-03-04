


function indexDelay(array) {
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