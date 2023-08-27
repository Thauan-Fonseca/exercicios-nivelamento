import Voo from "./Voo.js";

class VooFumantes extends Voo {
  assentosTotais = [];
  assentosNaoFumantes = [];
  assentosFumantes = [];

  constructor(numeroDoVoo, dia, mes, ano, hora, numeroVagas, assentosFumantes) {
    super(numeroDoVoo, dia, mes, ano, hora);
    this.numeroVagas = numeroVagas;
    this.assentosFumantes = assentosFumantes;
    this.assentosNaoFumantes = this.numeroVagas - this.assentosFumantes;
  }

  maxVagas() {
    return this.numeroVagas;
  }

  cadeirasFumantes() {
    return (
      console.log(`Número de cadeiras para fumantes: ${this.assentosFumantes}`),
      console.log(
        `Número de cadeiras para não fumantes: ${this.assentosNaoFumantes}`
      )
    );
  }

  tipo(cadeira) {
    if (cadeira > this.assentosNaoFumantes) {
      return "F";
    } else {
      return "N";
    }
  }
}

const novoVoo = new VooFumantes(10, 10, 10, 2010, 8, 120, 20);

console.log(novoVoo);
console.log(novoVoo.maxVagas());
novoVoo.cadeirasFumantes();
console.log(novoVoo.tipo(100));
