import { Request, Response } from "express";
import { UpdateVideoService } from "../../services/_videos/UpdateVideoService";

export class UpdateVideoController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name, description, duration, category_id } = request.body;

      const service = new UpdateVideoService();
      const result = await service.execute({
        id,
        name,
        description,
        duration,
        category_id,
      });

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
