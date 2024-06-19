"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor() {
        this.nombre = '';
        this.edad = 0;
        this.sexo = '';
        this.estadoCivil = '';
    }
    imprimirBio() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Sexo: ${this.sexo}, Estado Civil: ${this.estadoCivil}`);
    }
}
(() => {
    console.log('Interfaces Básicas');
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad'],
    };
})();
(() => {
    class Mutant {
        constructor() {
            this.age = 0;
            this.name = '';
            this.realName = '';
        }
        mutantPower(id) {
            return this.name;
        }
    }
})();
(() => {
    const client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip: 28001,
            country: 'Spain',
        },
        getFullAddress(id) {
            return `${this.address.zip}, ${this.address.country}`;
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 126,
            zip: 28002,
            country: 'Spain',
        },
        getFullAddress(id) {
            return `${this.address.zip}, ${this.address.country}`;
        }
    };
})();
//# sourceMappingURL=main.js.map