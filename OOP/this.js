
var rect = {
    width: 100,
    height: 50,
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
rect.draw();
rect.height = 100;
rect.draw();

function myFunc() {
    console.log (this);
    console.log (rect.printPropertis());
}
new myFunc();

var another = {
    width: 47,
    height: 56,
    print: rect.printPropertis
}
another.print();



