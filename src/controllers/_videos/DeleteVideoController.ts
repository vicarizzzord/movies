import { Request, Response } from "express";
import { RepositoryNotTreeError } from "typeorm";
import { DeleteVideoService } from "../../services/_videos/DeleteVideoService";

export class DeleteVideoController {
  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const service = new DeleteVideoService();

      await service.execute(id);

      return response.status(200).end();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
