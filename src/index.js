const express = require('express'); // Importando a biblioteca Express
const routes = require("./routes");
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json()); // Usando JSON para requisições
app.use(routes)
app.listen(3333);

