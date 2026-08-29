const fs = require('fs');

const logs = fs.readFileSync('../logs/security-monitor-access.log', 'utf8');

const removerQuebraLinha = logs.split('\n');

function retornarLinhaSemAsterisco(value) {
    if (value.charAt(0) !== "#") { // verifica se a primeira letra ou simbolo é oque eu passei
        return value;
    }
}

function retornarLinhasSemStringVazia(value) {
    if(value !== "") {
        return value;
    }
}

const linhaLimpa = removerQuebraLinha.filter(retornarLinhaSemAsterisco).filter(retornarLinhasSemStringVazia);
const linhaEmObjeto = {
    dados: linhaLimpa.map(linha => {
        const colunas = linha.split("|");

         // Retorna o objeto mapeado tirando os espaços extras com .trim()
        return {
            data: colunas[0].trim(),  //trim retira espaços nas pontas
            ip: colunas[1].trim(),
            metodo: colunas[2].trim(),
            rota: colunas[3].trim(),
            status: parseInt(colunas[4].trim()) // Transforma o status de texto para número
        };
    })
};
console.log(linhaEmObjeto)