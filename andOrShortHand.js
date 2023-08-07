var name = ''

/*
var fullName = ''

if ( name.length === 0 ) {
    var fullName = 'Araf babu'
}else {
    var fullName = name
}

console.log( fullName )
*/


var fullName2 = name || 'Araf Babu2'
console.log(fullName2)


var isOk = true
var fullName3 = isOk && 'Araf babu3'
console.log(fullName3)

var name = true; 

var  fullName4 = name && 'Araf babu 4 defuld';
console.log ( fullName4 );




