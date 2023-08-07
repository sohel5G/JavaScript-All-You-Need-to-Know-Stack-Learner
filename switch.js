
var date = new Date()
var today = date.getDay()

/* 0 Sunday, 1 Monday, 2 Tuesday, 3 Wednesday, 
   4 Thursday, 5 Friday, 6 Saturday */

if ( today === 0 ) {
    console.log('Today Is Sunday');
} else if ( today === 1 ) {
    console.log( 'Today Is Monday' )
} else if ( today === 2 ) {
    console.log('Today Is Tuesday')
} else if ( today === 3 ) {
    console.log('Today Is Wednesday')
} else if ( today === 4 ) {
    console.log('Today Is Thursday')
} else if ( today === 5 ) {
    console.log('Today Is Friday')
} else if ( today === 6 ) {
    console.log('Today Is Saturday')
}else{
    console.log('Sorry, no day found!')
}




switch ( today ) {
    case 0 : console.log('To Day is Sunday')
    break

    case 1 : console.log('Today is Monday')
    break

    case 2 : console.log('Today is Tuesday')
    break

    default : console.log("No Day found!")
}


