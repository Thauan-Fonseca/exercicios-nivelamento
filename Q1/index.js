class Alunos {
    matricula;
    nome;
    notaProva1;
    notaProva2;
    notaTrabalho;
    mediaPonderada 
    
    constructor(matricula, nome, notaProva1, notaProva2, notaTrabalho){
        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1
        this.notaProva2 = notaProva2
        this.notaTrabalho = notaTrabalho
        this.mediaPonderada = this.media()
    }

    media(){
        const media = (2.5 * this.notaProva1 + 2.5 * this.notaProva2 + 2 * this.notaTrabalho)/7;
        return media.toFixed(2)}
    
    final(){
        if(this.mediaPonderada > 7){
            return 0
        } else {
            const falta = (7 - this.mediaPonderada) * 2
            const mensagem = `Você precisará de ${falta} para passar`
            return mensagem
        }
    }
    
}

const aluno = new Alunos('0987', 'jeq', 4,4,10)
console.log(aluno)
console.log(aluno.media())
console.log(aluno.final())