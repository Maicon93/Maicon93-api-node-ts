import express from 'express';
import routes from "./routes";
import authRoutes from "./routes/authRouters"
import userRoutes from "./routes/userRouters"
import categoryRoutes from "./routes/categoryRouters"
import creditCardRoutes from "./routes/creditCardRouters"
import movimentationRoutes from "./routes/movimentationRouters"
const cors = require('cors');

const app = express();

// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use(routes);
app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/category', categoryRoutes)
app.use('/credit-card', creditCardRoutes)
app.use('/movimentation', movimentationRoutes)



//Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000')
})