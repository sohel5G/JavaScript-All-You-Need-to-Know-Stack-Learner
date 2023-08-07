/* 
// Prototype and Prototypical Inheritance

var obj = {};
console.log (obj);

var obj2 = new Object();
console.log(obj2);

console.log (obj.__proto__ === obj2.__proto__);
console.log (Object.getPrototypeOf(obj));
console.log (Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2));

 */


/*
// Multi Level Inheritance 

var arr = [];
console.log (arr);

var text = new String('string text');
console.log( String('Hello') );

function Person(name) {
    this.name = name
}
var p1 = new Person('Abdullah Al Araf');
console.log (p1);

*/




// Property Descriptor in javaScript 

// var person = {
//     name: 'Abdullah Al Araf'
// }

// console.log(person);
// console.log(person.toString());

// for(var i in person){
//     console.log(i);
// }

// console.log ( Object.keys(person) );

// var descriptor = Object.getOwnPropertyDescriptor(person, 'name');
// console.log(descriptor);

// let baseObj = Object.get PrototypeOf(person);
// console.log(baseObj);
// let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor)

// Object.defineProperty(person, 'name', {
//     enumerable: false,
//     writable: false,
//     configurable: false
// });

// console.log(person);
// console.log(Object.keys(person));
// for(var i in person){
//     console.log(i);
// }
// console.log()



/* 
// Constructor Prototype in JavaScript
function Person(name) {
    this.name = name
}

var p1 = new Person('Araf babu')

console.log (p1);
console.log ( Object.getPrototypeOf(p1) );
console.log ( p1.__proto__ )

 */







/* 

// Instance vs Prototype
function Square(width) {
    this.width = width
}

Square.prototype = {
    draw: function () {
        console.log('Draw')
    },
    toString: function() {
        return 'My width is = ' + this.width
    }
}

var sqrt1 = new Square(10)
var sqrt2 = new Square(5)

// console.log (sqrt1)
// console.log (sqrt2)

// console.log (sqrt1.draw())

console.log (sqrt1.toString())
 

 */






/* 

// Instance and Prototype  Members In JavaScript
function Square(width) {
    this.width = width
    this.getWidth = function() {
        console.log('Width is = ' + this.width)
        // this.draw()
    }
}
Square.prototype = {
    draw: function () {
        console.log('Draw')
        this.getWidth()
    },
    toString: function() {
        return 'My width is = ' + this.width
    }
}
var sqrt1 = new Square(10)
var sqrt2 = new Square(5)

// console.log (sqrt1.getWidth())

console.log (sqrt1.draw())
console.log (sqrt2.draw())

console.log (sqrt1);

 */




/* 

// Iterate object and HasOwnProperty In JavaScript
function Square(width) {
    this.width = width
    this.getWidth = function() {
        console.log('Width is = ' + this.width)
        // this.draw()
    }
}
Square.prototype = {
    draw: function () {
        console.log('Draw')
        this.getWidth()
    },
    toString: function() {
        return 'My width is = ' + this.width
    }
}
var sqrt1 = new Square(10)
var sqrt2 = new Square(5)

// console.log (sqrt1.getWidth())

console.log (sqrt1.draw())
console.log (sqrt2.draw())

console.log (sqrt1.hasOwnProperty('width'));
console.log (sqrt1.hasOwnProperty('getWidth'));
console.log (sqrt1.hasOwnProperty('draw'));

console.log (Object.keys(sqrt1))
for(var i in sqrt1) {
    console.log (i)
}

 */





// First Prototypical Inheritance In JavaScript
function Shape() {

}
Shape.prototype = {
    common: function() {
        console.log('I am common Method');
    }
}

function Square(width) {
    this.width = width;
}

Square.prototype = Object.create(Shape.prototype)

Square.prototype.draw = function() {
    console.log('Drawing');
}   


var shape = new Shape()
var sqr1 = new Square(35);

console.log(shape);
console.log(sqr1.common());

 







