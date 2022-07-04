import { Request, Response } from "express";
import { RepositoryNotTreeError } from "typeorm";
import { DeleteVideoService } from "../../services/_videos/DeleteVideoService";

export class DeleteVideoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteVideoService();
    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).end();
  }
}
