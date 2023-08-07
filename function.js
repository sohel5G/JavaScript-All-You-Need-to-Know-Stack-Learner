
// Input > Output > Processing

function thisIsMyFunctionName() {
    console.log ( 'This is my Frist Function' )
}

// thisIsMyFunctionName()

// for ( var i = 0; i < 10; i++ ) {
//     thisIsMyFunctionName()
// }

/* 
function add() {
    var a = 10
    var b = 25
    console.log ( a + b )
}

function sub() {
    var a = 30
    var b = 50
    console.log ( b - a )
}

add()
sub()

 */





// Function Arguments Parameters



/* 
function add( a, b ) {
    var result = a + b
    console.log (result)
}
add ( 4,5 )

function sub( x, y ) {
    console.log ( x - y )
}
sub( 10, 8 )

 */

/*
var arr1 = [1, 2, 3, 4, 5, 6, 7]
var arr2 = [1, 2, 3, 4, 5, 6, 7, 2]
var arr3 = [1, 2, 3, 4, 5, 6, 7, 3]
 
var result1 = 0
for ( var a = 0; a < arr1.length; a++ ) {
    result1 += arr1[ a ] 
}
console.log ( result1 )

var result2 = 0
for ( var a = 0; a < arr2.length; a++ ) {
    result2 += arr2[ a ] 
}
console.log ( result2 )

var result3 = 0
for ( var a = 0; a < arr3.length; a++ ) {
    result3 += arr3[ a ] 
}
console.log ( result3 )

*/
 

/* 
var arr1 = [1, 2, 3, 4, 5, 6, 7]
var arr2 = [1, 2, 3, 4, 5, 6, 7, 2]
var arr3 = [1, 2, 3, 4, 5, 6, 7, 3]
var arr4 = [1, 2, 3, 4, 5, 6, 7, 4]

function sumOfArr(arr) {
    var result = 0
    for ( var a = 0; a < arr.length; a++ ) {
        result += arr[ a ] 
    }
    console.log ( result )
}

sumOfArr(arr3)

 */





// Arguments Object 


/*

function test ( x, y, x ) {
    // console.log ( JSON.stringify( arguments ) )
    // console.log ( arguments )
    // console.log ( typeof a )

    for (var a = 0; a < arguments.length; a++) {
        console.log ( arguments[a] )
    }
}
// test()
test(33, 52, 85)

function test () {
    for (var a = 0; a < arguments.length; a++) {
        console.log ( arguments[a] )
    }
}
test(33, 52, 85)

function addAll() {
    var sum = 0
    for ( var a = 0; a < arguments.length; a++ ) {
        sum += arguments[a]
    }
    console.log ( sum )
}
addAll(3, 5, 5, 7, 20)
addAll(5, 5, 7)

*/





// Return Something from a function


/* 
function jugKora() {
    var jugFal = 0
    for (var a = 0; a < arguments.length; a++) {
        jugFal += arguments[a]
    }
    // console.log ( jugFal )
    return jugFal
}
// jugKora (4, 6)
var keepJugFal = jugKora ( 4, 6, 12 )
console.log (keepJugFal) 


function person(name, email, age, language) {
    return {
        Nname : name,
        Email : email, 
        Age : age,
        Language : language
    }
}
var showMe = person('Sohel Rana', 'conatctsohelrana@gmail.com', 30, 'JavaScript')
console.log(showMe)

 */





// Function Expression 
/* 
var addition = function ( a, b ) {
    return a + b
}
addition (3, 5)

setTimeout( function() {
    console.log ( 'Call me after 5 second' )
}, 5000 )

var another = addition
console.log (another( 4, 20 ))

 */



// Inner Function
/* 
function something(greet, name){
    function showFirstName() {
        if ( name ) {
            return name.split(' ')[0]
        }else{
            return ''
        }
    }   
    var message =greet + ' ' + showFirstName()
    console.log (message)
}
something( 'Good Evening', 'Abdullah Al Araf')

 */


// Function Scoping 

var a = 'abc'

if ( true ) {
    if ( true ) {
        var b = 'This is B'
    }
}
console.log ( b )

function one() {
    var a = 233
    function two() {
        
        console.log (a)
    }
    console.log(a)
    two()
} 
one()

function test( n ){
    function a() {
        return n % 2 === 0
    }

    function  b() {
        return n % 2 === 0
    }

    if ( a() === b() ) {
        console.log ('Hello World')
    }
}

test (10)


