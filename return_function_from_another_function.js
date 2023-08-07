function greet(msg) {
    function greetings(name) {
        return msg + ', ' + name + ' !'
    }
    return greetings
}

var gm = greet('Good morning')
// console.log(typeof gm)
var personName = gm('Abdullah Al Araf')
console.log (personName)

var gn = greet('Good Night')
var personName = gn('Sohel Rana')
console.log (personName)






function base(x) {
    function power(y){
        var result = 1
        for (var i = 0; i < x; i++) {
            result *= y
        }
        return result
    }
    return power
}

var base10 = base(10)
console.log(base10(2))

result = base(3)
console.log(result(3))

// OR

var result = base10
console.log(result(2))



