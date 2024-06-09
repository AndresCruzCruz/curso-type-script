(() => {
    function callBatman(): void {
        return;
    }

    const callSuperman = (): void => {
        return;
    }
    // Toda funcino sin un return implicito retorna void (vacio, undefined)
    const a = callBatman();
    console.log(a);
})();