// Student 1 : 
// Math : 80
// Chemistry : 75
// Physics : 86
// Higher math : 90

// [80, 75, 86, 90]

/* 

var obj = {  }
obj.x = 12
console.log( typeof obj )
console.log( obj )

var point = {
    x: 10,
    y: 20,
    z: 30
}
console.log ( point )

var obj2 = Object()
obj2.a = 15
console.log( obj2 )

var obj3 = new Object()
obj3.b = 25
console.log ( obj3 )


 */


// Accessing Object Properties
/* 
var point = {
    a: 15,
    b: 25,
    c: 35
}

console.log ( point.b + point.c) // Dot notation system
console.log ( point['a'] )  // Arrey notation system

var show = 'b'
console.log ( point[show] )

 */




// Setting Object Properties
/* 
var point = {
    a: 5,
    b: 10,
    c: 15
}

point.a = 25
point.x = 35
console.log ( point )
console.log ( point.d )

point['a'] = 50
point['y'] = 75

var showMe = 'y'
console.log ( point[showMe] )
point[showMe] = 100
console.log ( point )

 */


// Remove Object Property 
/* 
var point = {

    a: 10,
    b: 20,
    c: 30,
    d: 40
}
// point.a = undefined
// point['c'] = undefined
// delete point.b

console.log ( point )

 */



// Comparing Two Object In Javascript
/* 
var obj1 = {
    a: 5,
    b: 8,
    c: 10
}

var obj2 = {
    a: 5,
    b: 8,
    c: 10,
}
console.log (obj1 === obj2)

if ( obj1.a === obj2.a && obj1.b === obj2.b && obj1.c === obj2.c ) {
    console.log ( true )
}else{
    console.log ( false )
}

console.log ( JSON.stringify(obj1) === JSON.stringify(obj2) )

 */



// Iterate Object Properties
/* 
var obj = {
    a: 5,
    b: 7,
    c: 9
}
// console.log ( 'b' in obj )
// console.log ( 'p' in obj )

for ( var x in obj ) {
    console.log ( x )
    console.log ( x + ': ' + obj[x] )
}

 */



// Object Method

var obj = {
    x: 23,
    y: 33,
    z: 43,
    a: 'ss',
    b: 'yy'
}

console.log ( Object.keys(obj) )
console.log ( Object.values(obj) )
console.log ( Object.entries(obj) )

var obj2 = Object.assign( {}, obj )
console.log ( obj2 )

