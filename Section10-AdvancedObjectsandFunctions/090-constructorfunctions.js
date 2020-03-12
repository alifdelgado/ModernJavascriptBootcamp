const person = function(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

const me = new person('Andrew', 'Mead', 27);
console.log(me);