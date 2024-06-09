"use strict";
(() => {
    console.log('ags-required.ts cargado');
    const fullName = (firstName, lastName, upper) => {
        return `${firstName} ${lastName || 'Desconcodido'}`;
    };
    const name = fullName('Clark', 'Kent', true);
    console.log(name);
})();
