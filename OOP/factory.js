
var createRect = function( width, height ) {

    return {
        width: width,
        height: height,

        draw: function() {
            console.log ('I am a rectangle');
            this.printPropertis();
            console.log (this);
        },

        printPropertis: function() {
            console.log ('My width is ' + this.width);
            console.log ('my height is ' + this.height);
        }
    }

}
var rect1 = createRect(40, 20);
rect1.draw();

var rect2 = createRect(10, 20);
rect2.draw();

