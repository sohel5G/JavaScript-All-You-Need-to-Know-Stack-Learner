/* 
var arr = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff']

totalarr = arr.length

for (var n = 0 ; n < totalarr ; n++ ) {
    //console.log ( arr[n] )
    arr[n] = arr[n] + 2
}
console.log (arr)

 */

/* 
var arr2 = [1, 2, 3, 4, 5, 6]
var a = 0
for ( var n = 0; n < arr2.length; n++ ) {
    a += arr2[n]
}
console.log (a)
 */

/* 
var arr3 = [1, 2, 3, 4, 5, 6, 7]
for (var x = 0 ; x < arr3.length; x++ ) {
    if ( arr3[x] % 2 === 1 ) {
        console.log ( arr3[x] )
    }
}
*/


var arr3 = [1, 2, 3, 4, 5, 6, 7, 15]
var total = 0
for (var x = 0 ; x < arr3.length; x++ ) {
    if ( arr3[x] % 2 === 1 ) {
        total += arr3[x]
    }
}
console.log ( total )


