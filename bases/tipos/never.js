"use strict";
(() => {
    // Estas funciones nunca retornan un valor alcansable
    // No deben tener un punto alcanzable al terminar la funcion
    const abc = (message) => {
        if (false) {
            throw new Error(message);
        }
        else {
            return 1;
        }
    };
    abc('Hola mundo cruel');
    console.log('Fin del programa');
})();
