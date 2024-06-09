"use strict";
(() => {
    console.log('Hola Mundo');
    const hero = 'Flash';
    // Es bueno siempre configurar el tipo de retorno de la función
    function getName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batisignal activada';
    };
    const heroName = getName();
})();
