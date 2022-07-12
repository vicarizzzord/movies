import { Request, Response } from "express";
import { CategoryService } from "../_services/CategoryService";

export class CategoryController {
  async create(request: Request, response: Response) {
    try {
      const category = request.body;

      const service = new CategoryService();
      const result = await service.create(category);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const service = new CategoryService();
      await service.delete(id);

      return response.status(200).end();
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const category = request.body;

      const service = new CategoryService();
      const result = await service.update(id, category);

      return response.json(result);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }

  async getAll(request: Request, response: Response) {
    try {
      const service = new CategoryService();
      const categories = await service.getAll();

      return response.json(categories);
    } catch (error) {
      return response.status(404).json(error.message);
    }
  }

  async getOne(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const service = new CategoryService();
      const result = await service.getOne(id);

      return response.json(result);
    } catch (error) {
      return response.status(404).json(error.message);
    }
  }
}
