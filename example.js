function getLength(value) {
    if(value && value.length !== undefined) {
        console.log(value.length)
    }else{
        console.log(0) 
    }
}
getLength('6')
getLength(4)
getLength([1, 2, 6])


function getLength(value) {
    const valueLength = value && value.length !== undefined ? value.length : 0;
    console.log(valueLength);
}
getLength('6')
getLength(4)
getLength([1, 2, 6])

