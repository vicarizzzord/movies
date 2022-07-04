import { Router } from "express";
import { CreateCategoryController } from "./controllers/_categories/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/_categories/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/_categories/GetAllCategoriesController";
import { UpdateCategoryController } from "./controllers/_categories/UpdateCategoryController";
import { CreateVideoController } from "./controllers/_videos/CreateVideoController";
import { DeleteVideoController } from "./controllers/_videos/DeleteVideoController";
import { GetAllVideosController } from "./controllers/_videos/GetAllVideosController";
import { UpdateVideoController } from "./controllers/_videos/UpdateVideoController";

const routes = Router();

// Categories routes
routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);

//Videos routes
routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);
routes.put("/videos/:id", new UpdateVideoController().handle);
routes.delete("/videos/:id", new DeleteVideoController().handle);

export { routes };
