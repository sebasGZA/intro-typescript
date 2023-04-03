export let name: string | null = "Sebas";
export const age: number = 27;
export const isValid: boolean = true;

name = "Sebastian";

export const templateString: string = `This is a templateString 
Multiline 
"" double
'' simple
Inject values ${name}
expression ${1 + 1}
numbers ${age}
booleans ${isValid}`;
