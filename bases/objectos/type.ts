(() =>{

    type Hero = { // Definimos un tipo para un objeto y definir las propiedades que debe tener
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }


    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
    }    
})();