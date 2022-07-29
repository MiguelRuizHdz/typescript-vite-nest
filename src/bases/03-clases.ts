
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

    constructor( 
        public readonly id: number,
        public name: string
    ) { }
}

export const charmander = new Pokemon(4, 'Charmander');

// charmander.id = 10;
// charmander.name = 'Mew';