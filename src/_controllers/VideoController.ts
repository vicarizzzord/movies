import { Request, Response } from "express";
import { VideoService } from "../_services/VideosService";

export class VideoController {
  public service = new VideoService();

  async create(request: Request, response: Response) {
    try {
      const video = request.body;

      const service = new VideoService();
      const result = await service.create(video);

      // console.log(result);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const content = request.body;

      const service = new VideoService();
      const result = await service.update(id, content);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const service = new VideoService();
      await service.delete(id);

      return response.status(200).end();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      const service = new VideoService();
      const result = await service.getAll();

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getOne(request: Request, response: Response) {
    try {
      const { video } = request.params;

      const service = new VideoService();
      const result = await service.getOne(video);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
