//Adding Default Number Using ES6:-

function add(number1, number2=0  ) {
    // if(number2==undefined){
    //     number2 = 1;
    // }
    return number1 + number2;
}
var total = add(15);
console.log(total);