import './style.css'
import typescriptLogo from './typescript.svg';
import { setupCounter } from './counter';

// import { age, name } from './bases/01-types';
// import { bulbasaur, pokemonIds, pokemons } from './bases/02-objects';
// import { charmander } from './bases/03-clases';
// import { charmander } from './bases/04-injection';
// import { charmander } from './bases/05-decorators';
import { charmander } from './bases/06-decorators';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo vanilla" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo " alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript + ${ charmander.name }</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
