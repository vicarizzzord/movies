import { Request, Response } from "express";
import { CreateVideoService } from "../../services/_videos/CreateVideosService";

export class CreateVideoController {
  async handle(request: Request, response: Response) {
    try {
      const { name, description, category_id, duration } = request.body;

      const service = new CreateVideoService();

      await service.execute({
        name,
        description,
        category_id,
        duration,
      });

      return response.json();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
