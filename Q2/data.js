class Data {
    dia;
    mes;
    ano;
    formatoData;

    constructor(dia, mes, ano){
        this.dia = dia;
        this.mes = mes +1;
        this.ano = ano;
        this.formatoData = this.construtor()
    }

    construtor(){
        if(this.dia && this.mes && this.ano){
            return 'Formato de data está correto'
        } else {
            return '01/01/0001'
        }
    }

    compara(){
        const dataAtual = new Date()
        const diaAtual = dataAtual.getDay()
        const mesAtual = dataAtual.getMonth() 
        const anoAtual = dataAtual.getFullYear() 

        if(this.dia === diaAtual && this.mes === mesAtual && this.ano === anoAtual){
            return true
        } else {
            return false
        }
    }

    getDia(){
        return this.dia
    }

    getMes(){
        return this.mes
    }

    getMesExtenso(){
        const data = new Date(this.ano, this.mes, this.dia); // Substitua isso com a data desejada
        const opcoes = { month: 'long' };
        const nomeMes = new Intl.DateTimeFormat('pt-BR', opcoes).format(data);
        console.log(nomeMes); // Isso imprimirá o nome do mês por extenso em português (ex: "agosto")
    }

    getAno(){
        return this.ano
    }

}



const novaData = new Date()
const dia = novaData.getDay()
const mes = novaData.getMonth() 
const ano = novaData.getFullYear()

const data = new Data(dia, mes, ano)
console.log(data)
console.log(data.compara())
data.getMesExtenso()
console.log(data.getMes())
console.log(data.getAno())