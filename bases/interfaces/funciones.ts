(()=> {

    interface addTwoNumbers {
        (a: number, b: number): number; // Esto es una firma de una función
    }


    let addNumbersFunction: addTwoNumbers;  

    addNumbersFunction = (a: number, b: number) => {
        return a + b;
    }


})()