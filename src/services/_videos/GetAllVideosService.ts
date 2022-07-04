import AppDataSource from "../../database/dataSource";
import { Video } from "../../entities/Videos";

export class GetAllVideosService {
  async execute() {
    const repo = AppDataSource.getRepository(Video);
    const videos = await repo.find({
      relations: ['category']
    });

    return videos;
  }
}
