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

const removervazio = removerQuebraLinha.filter(retornarLinhaSemAsterisco).filter(retornarLinhasSemStringVazia);
console.log(removervazio)