"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    let powerHeroes;
    (function (powerHeroes) {
        powerHeroes[powerHeroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        powerHeroes[powerHeroes["fuerzaBatman"] = 1] = "fuerzaBatman";
        powerHeroes[powerHeroes["fuerzaFlash"] = 5] = "fuerzaFlash";
        powerHeroes[powerHeroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(powerHeroes || (powerHeroes = {}));
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
