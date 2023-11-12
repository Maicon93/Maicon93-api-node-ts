import { Router } from "express";
import { CreditCardController } from "../controllers/CreditCardController";
const categoryController = new CreditCardController();
const routes = Router();

routes.post('/insert-credit-card', categoryController.insert);
routes.post('/edit-credit-card', categoryController.edit);
routes.delete('/delete-credit-card/:id', categoryController.delete);
routes.post('/get-credit-cards', categoryController.consult);

export default routes;
