(() => {
    let avengers:number = 5;
    console.log({ avengers });

    const villians: number = 20;

    if (avengers < villians) {
        console.log('Estamos en problemas');
    } else {
        console.log('Nos salvamos');
    }

    avengers = Number('123');
    // NAN is Not A Number es considerado un número
    console.log({ avengers });

})();
