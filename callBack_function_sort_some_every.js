var persons = [
    {
        Name : 'Mr. Tamim',
        Country : 'Bangladesh',
        Age : 25
    },
    {
        Name : 'Ms. Raveya',
        Country : 'Nepal',
        Age : 35
    },
    {
        Name : 'Mr. Mohin',
        Country : 'India',
        Age : 45
    },
    {
        Name : 'Mr. Jakir',
        Country : 'Pakistan',
        Age : 18
    },
    {
        Name : 'Mr. Araf',
        Country : 'United State',
        Age : 48
    }
]
persons.sort(function(a, b){
    if ( a.Age > b.Age ) {
        return 1
    }else if ( a.Age < b.Age ) {
        return -1
    }else {
        return 0
    }
})
console.log (persons)

var arrName = [1, 4, 5, 82, 8, 3, 9, 24, -1, -5, 87, -44]
arrName.sort( function ( a, b ) {
    if ( a > b ) {
        return 1
    }else if ( a < b ) {
        return -1
    }else {
        return 0
    }
} )
console.log ( arrName )



var arrName2 = [1, 7, 5, 3, 7, 3, 9, 5, 9]
var varName2 = arrName2.every( function( value ){
    return value % 2 === 0
} )
console.log(varName2)

var arrName3 = [1, 3, 5, 7, 8, 9, 35, 77, -1, 3, 99]
var varName3 = arrName3.some( function( value ) {
    return value <= 0
} )
console.log( varName3 )

