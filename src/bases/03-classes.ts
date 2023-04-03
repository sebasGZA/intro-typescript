import axios from "axios";
import {
  Move,
  PokeAPIResponse,
} from "../interfaces/pokeapi-response.interface";
// export class Pokemon {
//   public id: number;
//   public name: string;

//   constructor(id: number, name: string) {
//     this.id = id;
//     this.name = name;
//     console.log("constructor called");
//   }
// }

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(public readonly id: number, public name: string) {}

  public scream(): void {
    console.log(`${this.name.toUpperCase()}`);
    this.speak();
  }

  private speak(): void {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeAPIResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    console.log(data.moves);
    return data.moves;
  }
}

export const charmander = new Pokemon(1, "charmander");
// console.log({ charmander });

// charmander.scream();
charmander.getMoves();
