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
```

## Como Utilizar

### Instalação das Dependências

Certifique-se de ter o Node.js e o npm (ou yarn) instalados. Em seguida, instale a dependência Express:

```
npm install express
```


## Executando o Servidor

### Para iniciar o servidor, execute o seguinte comando:

```bash
node app.js
```

## Realizando Requisições
A API está disponível no endpoint /calculadora. Você pode realizar requisições HTTP GET para este endpoint com os seguintes parâmetros:

- operacao: A operação a ser realizada (soma, subtracao, multiplicacao, divisao).
- n1: O primeiro número para a operação.
- n2: O segundo número para a operação.

###Exemplo de requisição GET:

```bash
http://localhost:3000/calculadora?operacao=soma&n1=5&n2=10
```

## Resposta esperada:

```json
    {
        "resultado": 15
    }
```

## Tratamento de Erros
- Parâmetros Inválidos: Se n1 ou n2 não forem números, a resposta será um erro 400 com a mensagem "Parâmetros n1 e n2 devem ser números."
- Divisão por Zero: Se tentar dividir por zero, a resposta será um erro 400 com a mensagem "Divisão por zero não é permitida."
- Operação Inválida: Se a operação fornecida não estiver entre as opções válidas, a resposta será um erro 400 com a mensagem "Operação Inválida."

## Contribuindo
Se desejar contribuir para este projeto, fique à vontade para enviar pull requests ou abrir issues com sugestões e melhorias.
