import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/_categories/UpdateCategoryService";

export class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name, description } = request.body;

      const service = new UpdateCategoryService();
      const result = await service.execute({ id, name, description });

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
