/* 
// What is Functional Programing

Functional programing is a programming paradigm-a style of building the structure and elements of computer program that threats computing as the evulation of mathematical functions and avoids changing state and mutable data - wikipadia 

// Three Main Terms
1. Pure Functions
    * It Returns the same result if given the same arguments
    * It doesn't cause any observable side effects
    
2. First Class Function 
    * A Function can be stored in a variable
    * A Function can be stored in an Array
    * A Function can be stored in an Object
    * We can create function as need 
    
3. Higher order Functions
    * We can pass function as an Arguments
    * We can return functions from another function 

 */

/*
1. Pure Functions
    * It Returns the same result if given the same arguments
    * It doesn't cause any observable side effects

// Pure Functions 
function sqr ( n ) {
    return n * n
}
console.log ( sqr( 3 ) )
console.log ( sqr( 3 ) )


// Not Pure Functions 
var n = 20
function change () {
    n = 200
}
change ()
console.log ( n )



// Not Pure Functions 
var print = {
    x: 45,
    y: 30
}
function printPoint ( print ) {
    print.x = 100
    print.y = 200

    console.log ( print )
}
printPoint ( print )
console.log ( print )
*/





/*
2. First Class Function 
    * A Function can be stored in a variable
*/
function add ( a, b ) {
    return a + b
}
var sum = add
console.log ( sum( 20, 30 ) )
console.log ( typeof sum )

/*
2. First Class Function 
    * A Function can be stored in an Array
*/
var arr = ['ss', 'dd']
arr.push ( add )
console.log ( arr )

console.log ( arr[2]( 2, 3 ), arr[0], arr[1] )

/*
2. First Class Function
    * A Function can be stored in an Object
*/
var obj = {
    name : add
}
console.log ( obj )
console.log ( obj.name( 20, 50 ) )

/*
2. First Class Function
    * We can create function as need 
*/

setTimeout( function () {
    console.log ( 'Hello World' )
}, 100 )


/*
3. Higher order Functions
    * We can pass function as an Arguments
    * We can return functions from another function 
*/
function add( a, b ) {
    return a + b
}

function manipulate( a, b, func ) {
    var c = a + b
    var d = a - b

    // function multifly() {
    //     var e = add( a, b )
    //     return c * d * e
    // }
    // return multifly

    return function() {
        var e = add(a, b)
        return c * d * e
    }
}

var multifly = manipulate(3, 4, add)
console.log ( multifly() )

