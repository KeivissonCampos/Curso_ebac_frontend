const alunos = [
    { nome: 'Ana', nota: 7 },
    { nome: 'João', nota: 5 },
    { nome: 'Carlos', nota: 8 },
    { nome: 'Maria', nota: 4 },
    { nome: 'Luiza', nota: 9 },
    { nome: 'Pedro', nota: 6 }
];

function alunosAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosAprovados(alunos);

aprovados.forEach(aluno => {
    console.log(`Parabéns, ${aluno.nome}! Você foi aprovado(a) com nota ${aluno.nota}.`);
});