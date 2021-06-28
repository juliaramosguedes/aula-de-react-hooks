import axios from "axios";

export const getPokemon = (nameOrId) => axios(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`).then(result => result.data);

export const listPokemon = (quantity) => axios(`https://pokeapi.co/api/v2/pokemon/?limit=${quantity}`).then(result => result.data.results);
