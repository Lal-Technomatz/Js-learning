// Immediatly Invoked Function Expression(IIFE)
// number of time we are facing global scope polution, to reduce this polution of that variables and whatever you declaration, we used IIFE.

(function chai(){
    // This is Named Iife.
    console.log(`DB CONNECTED`);
})();                // iifi function calling, in the iife calling semicolon(;) is compulsory to stop the execution of the code.
// chai()              // normal function calling

// (()=> {
//     console.log(`DB CONNECTED TWO`);
// })();

// passing the argument same as like function arguments.
((name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
})('LAL SINGH');
