# Calculadora Express

Esta é uma aplicação simples de calculadora desenvolvida com o framework Express para Node.js. Ela permite realizar operações matemáticas básicas (soma, subtração, multiplicação e divisão) através de requisições HTTP GET.

## Estrutura do Projeto

O projeto é composto por um único arquivo JavaScript que configura um servidor Express e define uma rota para a calculadora.

### Código

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/calculadora', (req, res) => {
    const operacao = req.query.operacao;
    const n1 = parseFloat(req.query.n1); 
    const n2 = parseFloat(req.query.n2); 
    let resultado;

    // Verificação dos parâmetros
    if (isNaN(n1) || isNaN(n2)) {
        res.status(400).send('Parâmetros n1 e n2 devem ser números.');
        return;
    }

    // Realizando a operação
    switch (operacao) {
        case 'soma':
            resultado = n1 + n2;
            break;
        case 'subtracao':
            resultado = n1 - n2;
            break;
        case 'multiplicacao':
            resultado = n1 * n2;
            break;
        case 'divisao':
            if (n2 === 0) {
                res.status(400).send('Divisão por zero não é permitida.');
                return;
            }
            resultado = n1 / n2;
            break;
        default:
            res.status(400).send('Operação Inválida');
            return;
    }

    res.json({ resultado: resultado });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
