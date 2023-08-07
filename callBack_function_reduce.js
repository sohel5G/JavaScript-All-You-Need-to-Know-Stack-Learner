var arr = [20, 13, 111, 2, 3, 44, 4, 5, 6]

var sum = arr.reduce( function( previus, current ) {
    return previus + current
}, 100 )
console.log(sum)

var max = arr.reduce( function( prev, curr ) {
    return Math.max( prev, curr )
}, 0)
console.log ( max )




function myReduce(arr, func, accu) {
    for ( var x = 0; x < arr.length; x++ ) {
        accu = func( accu, arr[x] )
    }
    return accu
}

var sum = myReduce( arr, function( prev, curr ){
    return prev + curr
}, 0)
console.log(sum)

var max = myReduce(arr, function( prev, curr ){
    return Math.max( prev, curr )
}, 0)
console.log(max)

var min = myReduce( arr, function( any1, any2 ){
    return Math.min( any1, any2 )
}, arr[0] )
console.log(min)

