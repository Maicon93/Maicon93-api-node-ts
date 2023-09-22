import express from 'express';
import routes from "./routes";
import authRoutes from "./routes/authRouters"
import userRoutes from "./routes/userRouters"
const cors = require('cors');

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use(routes);
app.use('/auth', authRoutes)
app.use('/user', userRoutes)

//Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000')
})