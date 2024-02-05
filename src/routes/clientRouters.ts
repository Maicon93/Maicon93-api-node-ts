import { Router } from "express";
import { ClientController } from "../controllers/ClientController";
const clientController = new ClientController();
const routes = Router();

routes.get('/consult-by-id/:id', clientController.consultById)
routes.get('/get-all-clients', clientController.getAllClients)
routes.post('/insert-client', clientController.insert)
routes.post('/edit', clientController.editClient)
routes.delete('/delete-client/:id', clientController.delete)

export default routes;
