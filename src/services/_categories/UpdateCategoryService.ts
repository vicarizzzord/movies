import AppDataSource from "../../database/dataSource";
import { Category } from "../../entities/Category";

type CategoryUpdateRequest = {
  id: string;
  name: string;
  description: string;
};

export class UpdateCategoryService {
  async execute({ id, name, description }: CategoryUpdateRequest) {
    const repo = AppDataSource.getRepository(Category);
    const item = await repo.findOneBy({ id });

    if (!item) {
      return new Error("Category does not exists!");
    }

    item.name = name ? name : item.name;
    item.description = description ? description : item.description;

    await repo.save(item);

    return item;
  }
}
