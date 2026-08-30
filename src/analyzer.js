import { linhaEmObjeto } from "./reader.js";

function detectarForcaBruta() {

    const tentativasPorIp = {};

    linhaEmObjeto.dados.forEach(linha => {

        if (linha.rota === "/login" && linha.status === 401) {

            if (!tentativasPorIp[linha.ip]) {
                tentativasPorIp[linha.ip] = 0;
            }

            tentativasPorIp[linha.ip]++;
        }

    });

    Object.entries(tentativasPorIp).forEach(([ip, quantidade]) => {

        if (quantidade > 3) {
            console.log(
                `Possível força bruta do IP: ${ip} - ${quantidade} tentativas`
            );
        }

    });
}

detectarForcaBruta();