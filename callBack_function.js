function sample( a, b, func) {
    var c = a + b
    var d = a - b

   return func(c , d)
}

function sum( x, y ) {
    return x + y
}
console.log ( sample(5, 8, sum) )


var result = sample(5, 8, function (x, y) {
    return x - y
})
console.log(result)



var result2 =  sample(5, 8, function(any, any2) {
    return any * any2
})
console.log(result2)


