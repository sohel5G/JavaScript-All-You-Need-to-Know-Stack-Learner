
// function test() {
//     console.log('Something')
// }
// console.log ( test.constructor );
// console.log ( test.name, test.length );


// var anotherRect = new Function('width', 'height', 
//     `this.width = width
//     this.height = height
//     this.draw = function() {
//         console.log ('I am a rectangle')
//         this.printPropertis()
//         console.log (this)
//     }
//     this.printPropertis = function() {
//         console.log ('My width is ' + this.width)
//         console.log ('my height is ' + this.height)
//     }`
//     )
//     var rect4 = new anotherRect(20, 50);
//     console.log(rect4.draw());



// Call, Apply and after bolbo Bind

function myFunc(c, d){
    console.log ( this );
    console.log ( this.a + this.b + c + d );
}

// myFunc.call( {a:20, b:30}, 2, 3 );
// myFunc.apply( {a:20, b:30}, [2, 3] );
var testBind = myFunc.bind( {a: 7, b: 3}, 2, 3 );
testBind();
var testBind = myFunc.bind( {a: 7, b: 3} );
testBind(2, 3);

// myFunc();






