// 10 bar "Hello World" print kora - no loop using
function sayHi(a){
    if( a === 0 ) {
        return 
    }
    console.log('Hello World')
    sayHi( a - 1 )
}
sayHi(10)


// Jug kora -  NO loop using
function sum(x){
    if( x === 1 ) {
        return 1
    }
    return x + sum( x - 1 )
}
console.log (sum(5))


// Factorial bar kora - No loop using
function fact(n) {
    if ( n === 1 ) {
        return 1
    }
    return n * fact( n - 1 )
}
console.log ( fact(4) )




var arr = [1, 2, 3, 4, 5]
function sumOfArr(arr, lastIndex) {
    if ( lastIndex < 0 ) {
        return 0
    }
    return arr[lastIndex] + sumOfArr(arr, lastIndex - 1)
}
console.log( sumOfArr(arr, arr.length - 1) )


