const person = { name : 'Jack Wiliam', age: 17, job : 'Faceboker', gfName : 'Emma Watson', address:'Sirajganj', phone:'01783628255', friends : ['Tom Hank', 'Tom Cruise', 'Tom Holland']}

console.log(person.gfName);
const age = person.age;
console.log(age);
const phone = person.phone;
console.log(phone);


////Finding Property From A Object...

const { job, name, address } = person;
console.log(job, name, address);

////Finding Property From An Array..
 const friends = ['sakib khan', 'Amir Khan', 'Salman KHan', 'Shahrukh khan']
 const [bangladesh, india, ...otherCountry] = friends;
 console.log(bangladesh, india, otherCountry);
