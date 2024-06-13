import { useState, useEffect } from 'react';
import {contract} from '../lib/starknet';

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const supply = await contract.total_supply().call();
      const promises = [];

      for (let i = 1; i <= supply.supply; i++) {
        promises.push(contract.get_pokemon(i).call());
      }

      const pokemonList = await Promise.all(promises);
      setPokemons(pokemonList);
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            Name: {pokemon.name}, Evolution Level: {pokemon.evolution_level}, Type: {pokemon.type}, Image: <img src={`https://ipfs.io/ipfs/${pokemon.ipfs_hash}`} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;