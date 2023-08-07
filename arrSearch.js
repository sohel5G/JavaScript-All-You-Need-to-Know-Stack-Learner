var arr = [ 1, 2, 3, 4, 55, 6, 7, 8, 9, 10, 11 ]

var findIt = 4 

var isFound = false

for ( var x = 0; x < arr.length; x++ ) {
    if ( arr[x] === findIt ) {
        console.log ('Data fund at index number is  ' +  x)
        isFound = true
        break
    }
}

if ( !isFound ) {
    console.log ( 'No data match' )
}



