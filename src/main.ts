// import { name, age } from "./bases/01-types";
// import { pokemonIds, picachu, charmander } from "./bases/02-objects";
// import { charmander } from "./bases/03-classes";
import { charmander } from "./bases/04-injection";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <hr />
    <h3>${JSON.stringify(charmander)}</h3>
    <h4>${charmander.imageUrl}</h4>
  </div>
`;
