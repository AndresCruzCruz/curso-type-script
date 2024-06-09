"use strict";
(() => {
    console.log('ags-required.ts cargado');
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('firstName es requerido');
        }
        return `${firstName} ${lastName}`;
    };
    let noName;
    const name = fullName(noName, 'Kent');
    console.log(name);
})();
