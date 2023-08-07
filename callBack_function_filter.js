var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var newArr = arr.filter( function( value ) {
    // return value % 2 === 1
    return value < 6
} )
console.log ( newArr )



function newArr2(arr, func){
    var newArr3 = []
    for ( var x = 0; x < arr.length; x++ ) {
        if ( func(arr[x]) ){
            newArr3.push( arr[x] )
        }
    }
    return newArr3
}

console.log( newArr2(arr, function(value) {
    return value % 2 === 0
} ) )

console.log( newArr2(arr, function(value) {
    return value % 2 === 1
} ) )

console.log( newArr2( arr, function(value) {
    return value > 5
} ) )



