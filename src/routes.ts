import { Router } from "express";
import { CategoryController } from "./_controllers/CategoryController";
import { VideoController } from "./_controllers/VideoController";

const routes = Router();

// Categories routes
routes.post("/categories", new CategoryController().create);
routes.get("/categories", new CategoryController().getAll);
routes.get("/categories/:id", new CategoryController().getOne);
routes.put("/categories/:id", new CategoryController().update);
routes.delete("/categories/:id", new CategoryController().delete);

//Videos routes
routes.post("/videos", new VideoController().create);
routes.get("/videos", new VideoController().getAll);
routes.get("/videos/:id", new VideoController().getOne);
routes.put("/videos/:id", new VideoController().update);
routes.delete("/videos/:id", new VideoController().delete);

export { routes };

