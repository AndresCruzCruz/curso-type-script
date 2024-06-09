(() => {
    console.log('ags-required.ts cargado');

    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || 'Desconcodido'}`;
    }
    const name = fullName('Clark');
    console.log(name);

})();