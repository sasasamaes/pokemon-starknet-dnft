%lang starknet

struct Pokemon {
    name: felt,
    image_url: felt,
    properties: (felt, felt, felt),  // (attack, defense, speed)
}

@storage_var
func pokemon_registry(owner: felt) -> (Pokemon, Pokemon, Pokemon) {
}

@external
func add_pokemon(owner: felt, name: felt, image_url: felt, attack: felt, defense: felt, speed: felt) {
    let pokemon = Pokemon(name, image_url, (attack, defense, speed))
    pokemon_registry.write(owner, pokemon, pokemon, pokemon)
    return ();
}

@external
func evolve_pokemon(owner: felt, evolution_stage: felt, new_name: felt, new_image_url: felt, new_attack: felt, new_defense: felt, new_speed: felt) {
    let (pokemon_1, pokemon_2, pokemon_3) = pokemon_registry.read(owner)

    if evolution_stage == 1 {
        pokemon_registry.write(owner, Pokemon(new_name, new_image_url, (new_attack, new_defense, new_speed)), pokemon_2, pokemon_3)
    } else if evolution_stage == 2 {
        pokemon_registry.write(owner, pokemon_1, Pokemon(new_name, new_image_url, (new_attack, new_defense, new_speed)), pokemon_3)
    } else if evolution_stage == 3 {
        pokemon_registry.write(owner, pokemon_1, pokemon_2, Pokemon(new_name, new_image_url, (new_attack, new_defense, new_speed)))
    }
    
    return ();
}

@view
func get_pokemon(owner: felt) -> (Pokemon, Pokemon, Pokemon) {
    return pokemon_registry.read(owner)
}