class Parent{
    constructor() {
        this.fatherName = 'Golam Azam'
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name
    }
}
var child2 = new Child('Eusha');
var child3 = new Child('Showaib') 
console.log(child2);
console.log(child3);

//example:

class Mother {
    constructor() {
        this.matherName = 'Afroza'
    }
}

class Sons extends Mother {
    constructor(name) {
        super();
        this.name = name
    }
    getFullName(){
        return this.matherName + " " + this.name;
    }
}
var child2 = new Sons('Eusha');
var child3 = new Sons('Showaib') 
console.log(child2.getFullName());
console.log(child3.getFullName());