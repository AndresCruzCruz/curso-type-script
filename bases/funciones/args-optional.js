"use strict";
(() => {
    console.log('ags-required.ts cargado');
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'Desconcodido'}`;
    };
    const name = fullName('Clark');
    console.log(name);
})();
