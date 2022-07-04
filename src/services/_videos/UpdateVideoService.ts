import AppDataSource from "../../database/dataSource";
import { Video } from "../../entities/Videos";

type VideoUpdateRequest = {
  id: string;
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

export class UpdateVideoService {
  async execute({
    id,
    name,
    description,
    duration,
    category_id,
  }: VideoUpdateRequest) {
    const repo = AppDataSource.getRepository(Video);
    const item = await repo.findOneBy({ id });

    if (!item) {
      return new Error("Category does note exists!");
    }

    item.name = name ? name : item.name;
    item.description = description ? description : item.description;
    item.duration = duration ? duration : item.duration;
    item.category_id = category_id ? category_id : item.category_id;

    await repo.save(item);

    return item;
  }
}
