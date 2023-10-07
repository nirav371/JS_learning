// Immediately Invoked Function Expressions (IIFE)

// global scope ke polution se problem hoti he kai bar to global scope ke koi bhi variable he declaration he uske polution ko hatane ke liye hum iife ka use karte he
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // semicolon is must in iife. without semicolon iife when context end it's can't decide.
// chai() // output: chai is not defined --> it's saves us frome global scope polution

( (name) => {
    // named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('Nirav')

console.log('nirav')