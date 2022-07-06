import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/_categories/DeleteCategoryService";

export class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const service = new DeleteCategoryService();
      
      await service.execute(id);

      return response.status(200).end();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
