(() =>{

    type Hero = { // Definimos un tipo para un objeto y definir las propiedades que debe tener
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let myCustomVariable: string | number | Hero = 'Ricardo Tapia';

    console.log(myCustomVariable);

    myCustomVariable = 10;  

    console.log(myCustomVariable);

    myCustomVariable = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
    }

    console.log(myCustomVariable);

})();