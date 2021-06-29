import { useState, useEffect } from "react";
import { listPokemon } from "@/services";
import _ from "lodash";

const parsePokemon = (pokemon) => {
  const {
    name,
    url
  } = pokemon;
  const id = url.replace("https://pokeapi.co/api/v2/pokemon/", "").match(/\d+/);
  return {
    id,
    name: _.startCase(name),
  };
};

const useListPokemon = (quantity) => {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(quantity) {
      listPokemon(quantity).then((result) => {
        const parsedPokemonList = result.map((item) => parsePokemon(item));
        setError(null);
        setPokemonList(parsedPokemonList);
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        setPokemonList(null);
        setError(error.message);
      })
    }
  }, [quantity]);

  return { loading, error, pokemonList };
}

export default useListPokemon;
