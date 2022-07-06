import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/_categories/CreateCategoryService";

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    try {
      const { name, description } = request.body;

      const service = new CreateCategoryService();
      const result = await service.execute({ name, description });

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
