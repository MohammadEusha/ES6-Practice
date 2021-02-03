//way 1 :
function double(num) {
    return num * 2 ;
    
}
const double1 = double(10);
console.log(double1);

//way 2 :

var multiple = function (num) {
    return num * 2
}
var multiple1 =  multiple(2);
console.log(multiple1);

// way 3: Using ES6 :- 


//If There is no parameter:
var give5 = () => 6;
var result3 = give5();
console.log(result3);
/////If the number of Parameter is 1;
var doubleIt = num => num * 3;
var result = doubleIt(30);
console.log(result);
////Example:
var tripleIt = number => number * 3;
var output = tripleIt(3);
console.log(output);


/////If the number of Parameter is 2;

var plus = (num1 , num2) => num1 + num2;
var result1 = plus(3, 4);
console.log(result1);


//Using Lost Of Work by ES6:
var doMath = (x, y) => {
    var sum = x + y;
    var diff = x -y;
    var divide = x / y;
    var result = sum * diff / divide;
    return result;
}
var ans = doMath(4 , 2);
console.log(ans);