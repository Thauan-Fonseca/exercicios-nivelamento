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
            for(let i = 1; i <= this.vagasOcupadas.length ; i++){
                if(this.vagasOcupadas.length === 100){
                    variavel = false
                    break
                }
                if(!this.vagasOcupadas.includes(i)){
                    variavel = false
                    return i
                } 
        }   }
    }

    ocupa(item){
        if(this.vagasOcupadas.includes(item)){
            return `A vaga ${item} já foi ocupada`
        } else {
            return `Vaga ${item} pode ser ocupada por você`
        }
    }
    
    vagas(){
        return `Esse é o número de vagas livres: ${100 - this.vagasOcupadas.length}`
    }

    getVoo(){
        return `Voo de número: ${this.numeroDoVoo}`
    }
}

const novoVoo = new Voo(100,11,10,2023, 20)
console.log(novoVoo)

novoVoo.adicionaAssento(1)

class VooFumantes extends Voo {

    tamanhoVoo
    assentosFumantes = []

    constructor(numeroDoVoo, dia, mes, ano, hora, tamanhoVoo, assentosFumantes){
        super(numeroDoVoo, dia, mes, ano, hora)
    }
    
}


