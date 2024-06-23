import { Pokemon } from "./decorators/pokemon-class";


const charmander = new Pokemon('charmander');

// (Pokemon.prototype as any).customName = 'Charmander';


console.log(charmander);

charmander.savePokemonToDB(3);