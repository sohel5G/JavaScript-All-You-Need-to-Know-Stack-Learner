// var Rectangle = function (width, height) {
//     this.width = width
//     this.height = height
//     var position = {
//         x: 56,
//         y: -100
//     }
//     var printPropertis = function() {
//         console.log ('My width is ' + this.width)
//         console.log ('my height is ' + this.height)
//     }.bind(this)
//     this.draw = function() {
//         console.log ('I am a rectangle')
//         printPropertis()
//         console.log ( 'Position X = ' + position.x + ' & Y = ' + position.y )
//     } 
// }

// var rect7 = new Rectangle(25, 35);
// rect7.draw();


// Another video 

var Rectangle = function (width, height) {
    this.width = width
    this.height = height

    var position = {
        x: 56,
        y: -100
    }

    var printPropertis = function() {
        console.log ('My width is ' + this.width)
        console.log ('my height is ' + this.height)
    }.bind(this)

    // this.getPosition = function(){
    //     return position
    // }

    this.draw = function() {
        console.log ('I am a rectangle')
        printPropertis()
        console.log ( 'Position X = ' + position.x + ' & Y = ' + position.y )
    } 

    Object.defineProperty(this, 'position', {
        get: function(){
            return position
        },
        set: function(value){
            position = value
        }
    });
}

var rect7 = new Rectangle(25, 35);
rect7.draw();

// console.log(rect7.getPosition())
console.log(rect7.position);
rect7.position = {
    x: 456,
    y: -220
}
