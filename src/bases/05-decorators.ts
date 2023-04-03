const MyDecorator = () => {
  return (target: Function) => {
    target = target;
    return NewPokemon;
  };
};

export class NewPokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`I do not want to scream`);
  }

  speak() {
    console.log(`I do not want to speak`);
  }
}

@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}`);
  }

  speak() {
    console.log(`${this.name} ${this.name}`);
  }
}

export const charmander = new Pokemon(4, "charmander");
charmander.scream();
charmander.speak();
