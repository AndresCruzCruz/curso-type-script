"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hello ${name}`;
    const saveTheWorld = () => `El mundo ha sido salvado`;
    let myFuntion;
    // myFuntion = 10;
    // console.log(myFuntion);
    // myFuntion = addNumbers;
    // console.log(myFuntion(1, 2));
    // myFuntion = greet;
    // console.log(myFuntion('Clark Kent'));
    myFuntion = saveTheWorld;
    console.log(myFuntion());
})();
