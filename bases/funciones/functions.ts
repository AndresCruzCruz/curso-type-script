(() => {
    console.log('Hola Mundo');
    const hero: string = 'Flash';

    // Es bueno siempre configurar el tipo de retorno de la función
    function getName(): string {
        return hero;
    }

    const activateBatisignal = (): string => {
        return 'Batisignal activada';
    }

    const heroName = getName();
})();