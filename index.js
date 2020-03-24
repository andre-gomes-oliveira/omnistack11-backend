const express = require('express'); // Importando a biblioteca Express

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento : "Semana OmniStack 11.0",
        aluno: "André Gomes de Oliveira"
    });
});

app.listen(3333);

