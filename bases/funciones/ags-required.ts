(() => {
    console.log('ags-required.ts cargado');

    const fullName = (firstName: string, lastName: (string|boolean)):string => {
        if (!firstName) {
            throw new Error('firstName es requerido');
        }
        return `${firstName} ${lastName}`;
    }

    let noName: any;

    const name = fullName(noName, 'Kent');
    console.log(name);

})();