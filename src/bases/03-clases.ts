
import axios from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

// Definición de clase
// export class Pokemon {

//     public id: number;
//     public name: string;

//     constructor( id: number, name: string ) {
//         this.id = id;
//         this.name = name;
//         console.log('constructor llamado');
//     }
// }

// Forma abreviada
export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }`;
    }

    constructor( 
        public readonly id: number,
        public name: string,
        // public imageUrl: string,
    ) { }

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`)
    }

    async getMoves(): Promise<Move[]> {
        // const moves = 10;
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves );
        return data.moves;
    }
}

export const charmander = new Pokemon(4, 'Charmander');

// charmander.id = 10;
// charmander.name = 'Mew';

// console.log(charmander);

// charmander.scream();
// charmander.speak();

// console.log( charmander.getMoves() );
charmander.getMoves();