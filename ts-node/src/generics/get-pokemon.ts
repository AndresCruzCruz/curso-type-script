import axios from "axios";
import { Pokemon } from '../interfaces';

export const getPokemon = async(pokemonID:number):Promise<Pokemon> => {
    // const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    // console.log(data.abilities[0].ability.name);
    return data;
}