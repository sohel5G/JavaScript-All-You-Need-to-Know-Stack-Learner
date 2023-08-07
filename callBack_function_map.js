var arr = [ 1, 2, 3 ]

// var myArr = arr.map( function( value, index, arr ) {
//     //return value * value
//     return Math.floor( (Math.random() * 5) * value )
// } )
// console.log (arr)
// console.log (myArr)


function myMap ( func ) {
    var newArr = []
    for ( var x = 0; x < arr.length; x++ ) {
        var tmp = func(arr[x], x, arr)
        newArr.push( tmp )
    }
    return newArr
}

var sqr = myMap( function(value, index, arr) {
   return value * value
} )
console.log ( arr )
console.log( sqr )


var ss = myMap( function( value, index, arr ) {
    return value * value * value
} )
console.log ( arr )
console.log(ss)





