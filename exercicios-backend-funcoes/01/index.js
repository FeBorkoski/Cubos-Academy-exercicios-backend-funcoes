function corrigirProva(prova) 
{
    const totalQuestoes = prova.questoes.length;
    let acertos = 0;
    
    for (const questao of prova.questoes) {
        if (questao.resposta === questao.correta) {
            acertos++;
        }
    }
    
    const nota = (acertos / totalQuestoes) * prova.valor;
    
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`);
}
const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};corrigirProva(prova);
