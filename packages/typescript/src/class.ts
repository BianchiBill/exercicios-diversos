export class Produto {
  constructor(
    readonly nome: string,
    readonly preco: number
  ) { }

  public consultPrice(): string {
    return `Produto: ${this.nome}\nValor: ${this.preco}`
  }

}

const product = new Produto('Chaveiro Charmander', 9.99)
