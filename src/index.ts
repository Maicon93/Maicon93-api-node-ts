import express from 'express';
import routes from "./routes";
const cors = require('cors');

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
//configuração de Rotas
app.use(routes);

//Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000')
})