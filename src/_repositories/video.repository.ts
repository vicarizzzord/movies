import { FindOptionsWhere, Repository } from "typeorm";
import AppDataSource from "../database/dataSource";
import { Video } from "../entities/Videos";

export class VideoRepository {
  private repo: Repository<Video>;
  constructor() {
    this.repo = AppDataSource.getRepository(Video);
  }

  async create(video: Video) {
    const newVideo = this.repo.create(video);
    await this.repo.save(newVideo);

    return newVideo;
  }

  async delete(id: string) {
    await this.repo.delete({ id });
  }

  async update(id: string, video: Video) {
    await this.repo
      .createQueryBuilder()
      .update(Video)
      .set({
        name: video.name,
        description: video.description,
        category: video.category,
        duration: video.duration,
      })
      .where({ id })
      .execute();
  }

  async getAll() {
    const videos = await this.repo.find({
      relations: ["category"],
    });

    return videos;
  }

  async getOneVideo(where: FindOptionsWhere<Video>) {
    const video = await this.repo.findOneBy(where);

    return video;
  }


}
