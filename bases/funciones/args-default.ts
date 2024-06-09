(() => {
    console.log('ags-required.ts cargado');

    const fullName = (firstName: string, lastName: string, upper?: Boolean): string => {
        return `${firstName} ${lastName || 'Desconcodido'}`;
    }
    const name = fullName('Clark', 'Kent', true);
    console.log(name);

})();