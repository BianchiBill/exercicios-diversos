interface Pessoa {
  nome: string;
  idade: number;
}

//objeto do tipo pessoa, não está sendo usado apenas está criado
const personObject: Pessoa = {
  nome: 'Bill',
  idade: 38,
}

export const person = async (person: Pessoa): Promise<string> => `O objeto do  tipo pessoa possui os dados: \nNome: ${person.nome},\nIdade: ${person.idade}`
