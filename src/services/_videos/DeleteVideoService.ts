import AppDataSource from "../../database/dataSource";
import { Video } from "../../entities/Videos";

export class DeleteVideoService {
  async execute(id: string) {
    const repo = AppDataSource.getRepository(Video);
    const item = repo.findOneBy({ id });

    if (!(await item)) {
      return new Error("Video does not exists!");
    }

    await repo.delete(id);
  }
}
