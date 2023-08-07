var Rectangle = function (width, height) {
    this.width = width
    this.height = height
    this.draw = function() {
        console.log ('I am a rectangle')
        this.printPropertis()
        console.log (this)
    }
    this.printPropertis = function() {
        console.log ('My width is ' + this.width)
        console.log ('my height is ' + this.height)
    }
}
var rect3 = new Rectangle(20, 25);
rect3.draw();



