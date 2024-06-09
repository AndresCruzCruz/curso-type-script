(() => {
    const addNumbers = (a: number, b: number): number => a + b;
    const greet = (name: string): string => `Hello ${name}`;
    const saveTheWorld = (): string => `El mundo ha sido salvado`;


    let myFuntion: () => string;

    // myFuntion = 10;
    // console.log(myFuntion);

    // myFuntion = addNumbers;
    // console.log(myFuntion(1, 2));

    // myFuntion = greet;
    // console.log(myFuntion('Clark Kent'));

    myFuntion = saveTheWorld;
    console.log(myFuntion());

})()