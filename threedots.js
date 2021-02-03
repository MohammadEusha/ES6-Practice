//Adding Arrays :--
const age = [12, 13 ,14];
const age1 = [14, 15, 16];
const age2 = [17, 18, 19];
const totalAge = age.concat(age1).concat(age2).concat([20]).concat([21]);
console.log(totalAge);

//Adding Arrays using ThreeDots(Spread Operator);

const age3 = [22, 23 ,24];
const age4 = [24, 25, 26];
const age5 = [27, 28, 29];
const arrays = [...age3,...age4,...age5,30,31]
console.log(arrays); 

///Finding Max Number:
const eusha = 500;
const showaib = 700;
const abir = 800;
var max = Math.max(eusha, showaib, abir);
console.log(max);

///Finding Max Number from an Array:
const maxArray = [100,200,300,400];
const maxResult = Math.max(...maxArray)
console.log(maxResult);