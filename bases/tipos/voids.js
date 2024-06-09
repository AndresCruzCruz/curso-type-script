"use strict";
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    // Toda funcino sin un return implicito retorna void (vacio, undefined)
    const a = callBatman();
    console.log(a);
})();
