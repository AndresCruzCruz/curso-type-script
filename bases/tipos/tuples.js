"use strict";
(() => {
    console.log('Tuples');
    // Las tuplas son arreglos con un número fijo de elementos
    const hero = ['Dr. Strange', 100, true];
    hero[1] = 50;
    hero[0] = 'Ironman';
    hero[2] = false;
    console.log(hero);
})();
