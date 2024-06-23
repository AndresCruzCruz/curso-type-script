import { printObect, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Villian, Hero } from "../interfaces"; // truco para importar varios elementos de un solo archivo

// printObect(123);
// printObect(new Date());
// printObect({a:1, b:2, c:3});
// printObect('Hola mundo');

// console.log(genericFunctionArrow(3.1416).toFixed(2) );

// console.log(genericFunctionArrow('Hola mundo').toUpperCase());

// console.log(genericFunctionArrow( new Date() ).getDay() );


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log( genericFunctionArrow<Villian>(deadpool).dangerLevel );