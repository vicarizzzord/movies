import { FindOptionsWhere, Repository } from "typeorm";
import AppDataSource from "../database/dataSource";
import { Category } from "../entities/Category";

export class CategoryRepository {
  private repo: Repository<Category>;
  constructor() {
    this.repo = AppDataSource.getRepository(Category);
  }

  async create(category: Category) {
    const newCategory = this.repo.create(category);
    await this.repo.save(newCategory);

    return newCategory;
  }

  async delete(id: string) {
    await this.repo.delete({ id });
  }

  async update(id: string, category: Category) {
    this.repo
      .createQueryBuilder()
      .update(Category)
      .set({
        name: category.name,
        description: category.description,
      })
      .where({ id })
      .execute();
  }

  async getAll() {
    const item = await this.repo.find();
    return item;
  }

  async getOneCategory(where: FindOptionsWhere<Category>) {
    const category = await this.repo.findOneBy(where);
    return category;
  }
}
