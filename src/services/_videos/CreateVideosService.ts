import AppDataSource from "../../database/dataSource";
import { Category } from "../../entities/Category";
import { Video } from "../../entities/Videos";

type VideoRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

export class CreateVideoService {
  async execute({
    name,
    description,
    duration,
    category_id,
  }: VideoRequest): Promise<Error | Video> {
    const repo = AppDataSource.getRepository(Video);
    const repoCategory = AppDataSource.getRepository(Category);
    const catID = repoCategory.findOneById(category_id);

    if (!(await catID)) {
      return new Error("Category does not exists");
    }
    const video = repo.create({
      name,
      description,
      duration,
      category_id,
    });

    await repo.save(video);

    return video;
  }
}
