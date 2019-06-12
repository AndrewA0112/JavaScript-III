/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding, 'this' is in the global scope
* 2. When 'this' has a dot after it with some type of variable after that dot
* 3. Using a constructor function, it has a function with a capital letter at the start, and a 'new' statement when using that function
* 4. Using .call or .apply
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
}

sayName('Andrew');

// Principle 2

// code example for Implicit Binding
const myObjOne = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObjOne.sayHello('Andrew');

// Principle 3

// code example for New Binding
function Person(attr) {
    this.greeting = attr.greeting;
    this.name = attr.name;
    this.speak = function() {
        console.log(`${this.greeting} ${this.name}!`);
        console.log(this);
    }
}

const myObjTwo =  {
    greeting: 'Hello',
    name: 'Andrew'
}

const andrew = new Person(myObjTwo);
andrew.speak();

// Principle 4

// code example for Explicit Binding
const yourObject = {
    name: 'Andrew',
    city: 'Houston',
    favoriteFood: '🍕'
}
const thingsYouEnjoy = ['Nature', 'Coding', 'Games']

function tellUsAboutYourself(thing1, thing2, thing3){
    return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`
}

console.log(tellUsAboutYourself.apply(yourObject, thingsYouEnjoy))