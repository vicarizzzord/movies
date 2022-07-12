import { Category } from "../entities/Category";
import { CategoryRepository } from "../_repositories/category.repository";

export class CategoryService {
  async create(category: Category): Promise<Category | Error> {
    const repo = new CategoryRepository();
    const duplicated = await repo.getOneCategory(category);

    if (duplicated) {
      throw new Error("Category already exists!");
    }
    
    const item = await repo.create(category);
    return item;
  }

  async delete(id: string) {
    const repo = new CategoryRepository();
    const item = await repo.getOneCategory({ id });

    if (!item) {
      throw new Error("Category does not exists!");
    }

    await repo.delete(id);
  }

  async update(id: string, category: Category) {
    const repo = new CategoryRepository();
    const item = await repo.getOneCategory({ id });

    if (!item) {
      throw new Error("Category does not exists!");
    }
    await repo.update(id, category);
    return { id, category };
  }

  async getAll() {
    const repo = new CategoryRepository();
    const categories = await repo.getAll();

    return categories;
  }

  async getOne(id: string) {
    const repo = new CategoryRepository();
    const category = await repo.getOneCategory({ id });

    if (!category) {
      throw new Error("Category doesn't exists!");
    }

    return category;
  }
}
