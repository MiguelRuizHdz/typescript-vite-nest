
export const pokemonIds = [1,20,30,34,66];

// conversión a un número
pokemonIds.push( +'1' );

console.log(pokemonIds);

interface Pokemon {
    id: number;
    name: string;
    age: number;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 2
}
export const charmander: Pokemon = {
    id: 1,
    name: 'Charmander',
    age: 1
}

console.log(bulbasaur)

export const pokemons: Pokemon[] = [];

pokemons.push( charmander, bulbasaur );

console.log(pokemons);