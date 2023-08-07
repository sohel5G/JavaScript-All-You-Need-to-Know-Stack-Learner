var arrInarr = [
    [10, 15, 20, 25],
    [30, 35, 40, 45],
    [50, 55, 60, 65]
]

// console.log (arrInarr[0][0])
// console.log (arrInarr[1][0])
// console.log (arrInarr[2][0])

for ( var x = 0; x < arrInarr.length; x++ ) {

    for ( var y = 0; y < arrInarr[x].length; y++) {
        console.log ( arrInarr[x][y] )
    }

}


for ( var a = 0; a < arrInarr.length; a++ ) {
    for ( var b = 0; b < arrInarr[a].length; b++ ) {
        console.log ('this element is ' + a + ' : ' + arrInarr[a][b] )
    }
}




