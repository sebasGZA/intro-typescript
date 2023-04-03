// import { name, age } from "./bases/01-types";
// import { pokemonIds, picachu, charmander } from "./bases/02-objects";
// import { charmander } from "./bases/03-classes";
// import { charmander } from "./bases/04-injection";
// import { charmander } from "./bases/05-decorators";
import { charmander } from "./bases/06-decorators2";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <hr />
    <h3>${JSON.stringify(charmander)}</h3>
  </div>
`;
