import AppDataSource from "../../database/dataSource";
import { Category } from "../../entities/Category";

export class GetAllCategoriesService {
  async execute() {
    const repo = AppDataSource.getRepository(Category);
    const categories = await repo.find();

    return categories;
  }
}
