var arr = [1, 3, 25, 6, 43, 5, 7, 8, 9, 11, 33, 99, 25]

var result = arr.find( function(value){
    return value === 43
} )
console.log(result)
 
let ss = arr.findIndex( function(value, index, thisarr) {
    return value === 25;
});
let bb = arr.lastIndexOf(25);
console.log(bb);

// var resultIndex = arr.findIndex( function(value){
//     return value === 43
// } )
// console.log(resultIndex)


// function myFind( arr, func ){
//     for ( var i = 0; i < arr.length; i++ ) {
//         if( func(arr[i]) ){
//             // console.log( arr[i] )
//             console.log(i)
//         }
//     }
// }
// myFind(arr, function(value){
//     return value === 43
// })



