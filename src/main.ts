import { name, age, templateString } from "./bases/01-types";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <hr />
    <h2>${name} ${age}</h2>
    <h3>${templateString}</h3>
  </div>
`;
