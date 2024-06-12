import Pokemon from './components/Pokemon';

export default function Home() {
  const owner = 'OWNER_ADDRESS'; // Reemplaza con la dirección del propietario

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Pokemon Evolution</h1>
      <Pokemon owner={owner} />
    </main>
  );
}
