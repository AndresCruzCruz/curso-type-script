(() => {
    console.log('Strings');

    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna's Verde";
    const volcanNegro: string = `Volcán Negro ${ batman}`;

    const abc = 123;
    console.log(` I'm ${batman}, abc`);
    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() ?? 'No hay caracter')

})();