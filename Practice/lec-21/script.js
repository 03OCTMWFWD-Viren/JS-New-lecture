// constructor function and the new Operator
const person = function (firstname, birthyear){
    // Instance properties
    this.firstname = firstname;
    this.birthyear = birthyear;

    // Never to this 
    this.calcAge=function(){
        console.log(2037 - birthyear );
    }
} 

const jonas =new person('jonas',1991)
console.log(jonas);

person.hey = function(){
    console.log('Hey there');
    console.log(this);
}
// person.hey();

// Prototypes
console.log(person.prototype);
person.prototype.calcAge = function(){
    console.log(2037 - this.birthyear);
};

jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__=== person.prototype);   // true //
console.log(person.prototype.isPrototypeOf(jonas));  // true //


