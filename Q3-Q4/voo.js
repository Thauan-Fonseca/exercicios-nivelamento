class Voo {

    numeroDoVoo;
    dia;
    mes;
    ano;
    hora;
    passageiros = []
    vagasOcupadas = []
    
    constructor(numeroDoVoo, dia, mes, ano, hora){
        this.numeroDoVoo = numeroDoVoo
        this.dia = dia
        this.mes = mes
        this.ano = ano
        this.hora = hora
    }

    adicionaPassageiro(item){
        if(this.assentosOcupados.length < 100){
            this.vagasOcupadas.push(item)
        }
    }

    assentosOcupados(){
        return `Essas são as vagas ocupadas: ${this.vagasOcupadas}`
    }

    adicionaAssento(assento){
        this.passageiros = [this.vagasOcupadas.push(assento)]
        return this.passageiros
    }
    
    verifica(item){
        if(this.vagasOcupadas.includes(item)){
            return `A vaga ${item} já está ocupada`
        } else {
            return `A vaga ${item} não está ocupada`
        }
    }

    proximaLivre(){
        let variavel = true
        while(variavel){
            for(let i = 1; i <= this.vagasOcupadas.length +1 ; i++){
                if(!this.vagasOcupadas.includes(i)){
                    variavel = false
                    return i 
                }
           }
        }
    }

    ocupa(item){
        if(this.vagasOcupadas.includes(item)){
            return `A vaga ${item} já foi ocupada`
        } else {
            this.vagasOcupadas.push(item)
            return `Você está ocupando essa cadeira agora`
        }
    }
    
    vagas(){
        return `Esse é o número de vagas livres: ${100 - this.vagasOcupadas.length}`
    }

    getVoo(){
        return `Voo de número: ${this.numeroDoVoo}`
    }
}

const vooAtual = new Voo(10, 23,4,2023,4)
console.log(vooAtual)
vooAtual.adicionaAssento(1)
vooAtual.adicionaAssento(12)
vooAtual.adicionaAssento(2)
vooAtual.adicionaAssento(3)
vooAtual.adicionaAssento(5)
console.log(vooAtual.ocupa(10))
console.log(vooAtual.verifica(3))
console.log(vooAtual.proximaLivre())
console.log(vooAtual.assentosOcupados())



class VooFumantes extends Voo {

    assentosTotais = []
    assentosNaoFumantes = []
    assentosFumantes = []

    constructor(numeroDoVoo, dia, mes, ano, hora, numeroVagas, assentosFumantes){
        super(numeroDoVoo, dia, mes, ano, hora)
        this.numeroVagas = numeroVagas
        this.assentosFumantes = assentosFumantes
        this.assentosNaoFumantes = this.numeroVagas - this.assentosFumantes
    }

    maxVagas(){
        return this.numeroVagas
    }

    cadeirasFumantes(){
        return (console.log(`Número de cadeiras para fumantes: ${this.assentosFumantes}`),
        console.log(`Número de cadeiras para não fumantes: ${this.assentosNaoFumantes}`))
    }

    tipo(cadeira){
        if(cadeira > this.assentosNaoFumantes){
            return 'F'
        } else {
            return 'N'
        }
    }
}

const novoVoo = new VooFumantes(10, 10,10,2010, 8, 120, 20)

console.log(novoVoo)
console.log(novoVoo.maxVagas())
console.log(novoVoo.cadeirasFumantes())
console.log(novoVoo.tipo(100))

