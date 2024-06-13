import { useState } from 'react';
import PokemonList from '@/app/components/PokemonList';
import EvolvePokemon from '@/app/components/EnvolvePokemon';
import Login from '@/app/components/Login';

export default function Home() {
  const [account, setAccount] = useState(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Pokemon DApp</h1>
            <Login onLogin={setAccount} />
            {account && (
                <>
                    <PokemonList account={account} />
                    <EvolvePokemon account={account} />
                </>
            )}
    </main>
  );
}
