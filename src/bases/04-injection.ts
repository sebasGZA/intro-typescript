import {
  Move,
  PokeAPIResponse,
} from "../interfaces/pokeapi-response.interface";
import {
  HttpAdapter,
  PokeApiAdapter,
  PokeApiFetchAdapter,
} from "../api/pokeApi.adapter";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    private readonly http: HttpAdapter
  ) {}

  public scream(): void {
    console.log(`${this.name.toUpperCase()}`);
    this.speak();
  }

  private speak(): void {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeAPIResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    console.log(data.moves);
    return data.moves;
  }
}

const pokeApi = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(1, "charmander", pokeApi);
export const picachu = new Pokemon(2, "picachu", pokeApiFetch);

charmander.getMoves();
picachu.getMoves();
