import { Router } from "express";
import { MovimentationController } from "../controllers/MovimentationController";
const movimentationController = new MovimentationController();
const routes = Router();

routes.post('/insert', movimentationController.insert);
routes.delete('/delete-movimentation/:id', movimentationController.delete);
routes.post('/get-movimentation', movimentationController.consult);
routes.get('/get-movimentation-for-mounths', movimentationController.getMovimentationForMounth);
routes.post('/get-movimentation-for-category', movimentationController.getMovimentationsForCategory);



export default routes;
