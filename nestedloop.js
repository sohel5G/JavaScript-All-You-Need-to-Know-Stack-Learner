/* 
1
1 2
1 2 3
1 2 3 4 
1 2 3 4 5
*/

var a = 1;
for ( a; a <= 10; a++ ) {
    
    var results = ''

    var b = 1
    for ( b; b <= a; b++ ) {
        results += b + ' '
    }

    console.log(results)

}





var n = 5
var i = 1

for ( i; i <= n; i++ ) {

    var result = ''
    var j = 1

    for ( j; j <= n; j++ ) {
        result += '* ' 
    }

    console.log(result)
}








