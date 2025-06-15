//  Immediately Invoked function expressions (IIFE)

//  (function definition)(function call)


function chai(){                                // NORMAL FUNCTION
    console.log(`DB CONNECTED`);
    
}
chai();         // DB CONNECTED


// IMPORTANT :-> IIFE ends with semicolon to start new IIFE

(function chai(){                               // IIFE function
    console.log(`DB CONNECTED`);
    
})();                               // DB CONNECTED


(function aurCode(){
    console.log(`DB CONNECTED TWO`);
    
})();                               // DB CONNECTED TWO


( () => {                                       // IIFE arrow function
    console.log(`DB CONNECTED THREE`);
    
})();                               // DB CONNECTED THREE


( (name) => {
    console.log(`DB CONNECTED , ${name}`);
    
})("vishal");                       // DB CONNECTED , vishal