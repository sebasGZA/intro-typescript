export const pokemonIds: number[] = [1, 20, 30, 34, 66];

pokemonIds.push(+"70"); //Parse to number

// console.log(pokemonIds);

interface Pokemon {
  id: number;
  name: string;
  age?: number;
}

export const picachu: Pokemon = {
  id: 1,
  name: "Picachu",
  age: 15,
};

export const charmander: Pokemon = {
  id: 2,
  name: "Charmander",
};