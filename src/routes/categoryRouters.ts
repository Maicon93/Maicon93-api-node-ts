import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";
const categoryController = new CategoryController();
const routes = Router();

routes.post('/insert-category', categoryController.insert);
routes.post('/edit-category', categoryController.edit);
routes.delete('/delete-category/:id', categoryController.delete);
routes.post('/consult-category', categoryController.getCategorys);

export default routes;
