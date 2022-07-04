import AppDataSource from "../../database/dataSource";
import { Category } from "../../entities/Category";

export class DeleteCategoryService {
  async execute(id: string) {
    const repo = AppDataSource.getRepository(Category);
    const item = repo.findOneBy({ id });

    if (!(await item)) {
      return new Error("Category does not exists!");
    }

    await repo.delete(id);
  }
}
