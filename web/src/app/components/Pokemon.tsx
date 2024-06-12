import { useState, useEffect } from 'react';
import contract from '../../../lib/starknet';

const Pokemon = ({ owner }) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            const { 0: pokemon1, 1: pokemon2, 2: pokemon3 } = await contract.call('get_pokemon', owner);
            setPokemons([pokemon1, pokemon2, pokemon3]);
        };

        fetchPokemons();
    }, [owner]);

    const evolvePokemon = async (evolutionStage, newName, newImageUrl, newAttack, newDefense, newSpeed) => {
        await contract.invoke('evolve_pokemon', owner, evolutionStage, newName, newImageUrl, newAttack, newDefense, newSpeed);
        const { 0: pokemon1, 1: pokemon2, 2: pokemon3 } = await contract.call('get_pokemon', owner);
        setPokemons([pokemon1, pokemon2, pokemon3]);
    };

    return (
        <div>
            {pokemons.map((pokemon, index) => (
                <div key={index}>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.image_url} alt={pokemon.name} />
                    <p>Attack: {pokemon.properties[0]}</p>
                    <p>Defense: {pokemon.properties[1]}</p>
                    <p>Speed: {pokemon.properties[2]}</p>
                </div>
            ))}
            <button onClick={() => evolvePokemon(1, 'EvolvedName', 'NewImageUrl', 100, 100, 100)}>Evolve</button>
        </div>
    );
};

export default Pokemon;