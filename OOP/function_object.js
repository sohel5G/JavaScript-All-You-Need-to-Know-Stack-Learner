
function test() {
    console.log('Something')
}
console.log ( test.constructor );
console.log ( test.name, test.length );


var anotherRect = new Function('width', 'height', 
    `this.width = width
    this.height = height
    this.draw = function() {
        console.log ('I am a rectangle')
        this.printPropertis()
        console.log (this)
    }
    this.printPropertis = function() {
        console.log ('My width is ' + this.width)
        console.log ('my height is ' + this.height)
    }`
    
    )
    
    var rect4 = new anotherRect(20, 50);
    console.log(rect4.draw());





