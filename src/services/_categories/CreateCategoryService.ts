import AppDataSource from "../../database/dataSource";
import { Category } from "../../entities/Category";

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    const repo = AppDataSource.getRepository(Category);
    const item = repo.findOneBy({ name });

    if (await item) {
      return new Error("Category already exists");
    }
    const category = repo.create({
      name,
      description,
    });

    await repo.save(category);

    return category;
  }
}
