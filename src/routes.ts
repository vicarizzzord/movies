import {Router} from "express";
import { CreateCategoryController } from "./controllers/_categories/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/_categories/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/_categories/GetAllCategoriesController";
import { UpdateCategoryController } from "./controllers/_categories/UpdateCategoryController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);


export {routes}