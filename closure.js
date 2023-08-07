// Able to remember and access it's lexical scope
// When that function executing outside it's lexical scope 

// function test () {
//     var msg = 'i am learning lexical scope & Clouser';
//     function sayMesage() {
//         console.log(msg);
//     }
//     sayMesage ();
// }
// test();


// function test () {
//     var msg = 'i am learning lexical scope & Clouser';
//     return function() {
//         console.log(msg);
//     }
// }
// var sayMesage = test();

// sayMesage();



for(let x = 1; x <= 15; x++) {
    (function(n){
        setTimeout( function(){
            console.log(x)
        }, 1000 * x )
    })(x)
}














