// components/EvolvePokemon.js
import { useState } from 'react';
import { contract } from '../starknet-config';

const EvolvePokemon = ({ account }) => {
    const [pokemonId, setPokemonId] = useState('');
    const [newType, setNewType] = useState('');
    const [newIpfsHash, setNewIpfsHash] = useState('');

    const handleEvolve = async () => {
        try {
            const tx = await contract.connect(account).invoke('evolve_pokemon', [pokemonId, newType, newIpfsHash]);
            alert('Pokemon evolved successfully!');
        } catch (error) {
            console.error('Error evolving pokemon:', error);
            alert('Failed to evolve pokemon');
        }
    };

    return (
        <div>
            <h2>Evolve Pokemon</h2>
            <input
                type="text"
                placeholder="Pokemon ID"
                value={pokemonId}
                onChange={(e) => setPokemonId(e.target.value)}
            />
            <input
                type="text"
                placeholder="New Type"
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
            />
            <input
                type="text"
                placeholder="New IPFS Hash"
                value={newIpfsHash}
                onChange={(e) => setNewIpfsHash(e.target.value)}
            />
            <button onClick={handleEvolve}>Evolve</button>
        </div>
    );
};

export default EvolvePokemon;