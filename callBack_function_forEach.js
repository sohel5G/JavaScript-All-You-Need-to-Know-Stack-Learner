var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
var total = 0
arr.forEach( function( value, index, arr  ) {
    total += value
} )
console.log (total)
console.log ('__________________________________________________________')



var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function MyForEach(func) {
    for ( var x = 0; x < arr.length; x++ ) {
        func(arr[x])
    }
}
var sum = 0
MyForEach( function func(value) {
    sum += value
} )
console.log (sum)


MyForEach( function(ss) {
    console.log(arr[ss] + 5)
} )

