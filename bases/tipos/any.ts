(() => {
    let avenger: any = 123;
    let exist; // Las constantes siempre tiene que ser declaradas
    let power;

    avenger = 'Dr Strange';
    console.log((avenger as string).charAt(0));

    avenger = 150.0098908;
    console.log(<number>avenger.toFixed(2));

    console.log(exist);
    console.log(power);

})();