// var a = 5;

// while ( a < 10 ) {
//     console.log('Abdulla Al Araf')
//     a++
// }


// var isRunning = true

// while ( isRunning ) {
    
// }

var isRunning =  true;

while ( isRunning ) {
    var randNumber = Math.random() * 10 + 1 
    var removePointNumber = Math.floor(randNumber)
    
    if ( removePointNumber === 5 ) {
        console.log('Araf is winner')

        isRunning = false
    }else {
        console.log( "The number is " + removePointNumber )
    }

}



