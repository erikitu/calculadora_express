const express = require('express')
const app = express()
const port = 3000


app.get('/calculadora', (req, res) => {
    let n1 = parseFloat(req.query.n1)
    let n2 = parseFloat(req.query.n2)
    let operacao = req.query.op;
    let resultado

    if (isNaN(n1)) {
        res.status(400).send('N1 Invalida')
        return
    } else if(isNaN(n2)) {
        res.status(400).send('N2 Invalida')
        return
    }

    console.log(n1, n2, operacao)

    if (operacao === 'soma') {
        resultado = n1 + n2
    } else if(operacao === 'subtracao') {
        resultado = n1 - n2
    } else if (operacao === 'multiplicacao') {
        resultado = n1 * n2
    } else if (operacao === 'divisao') {
        resultado = n1 / n2
    } else {
        res.status(400).send('Operação Invalida')
        return
    }

    res.json({  
        resultado: resultado
      });

}) 


app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

