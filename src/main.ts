// import { name, age } from "./bases/01-types";
import { pokemonIds, picachu, charmander } from "./bases/02-objects";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <hr />
    <h3>${pokemonIds.join(", ")}</h3>
    <code>${JSON.stringify(picachu)}</code>
    <code>${JSON.stringify(charmander)}</code>
  </div>
`;
