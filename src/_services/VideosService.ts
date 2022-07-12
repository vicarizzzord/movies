import { Video } from "../entities/Videos";
import { VideoRepository } from "../_repositories/video.repository";

export class VideoService {
  async create(video: Video): Promise<Video | Error> {
    const repo = new VideoRepository();
    const duplicated = await repo.getOneVideo(video);
    console.log(duplicated);
    
    if(duplicated){
      throw new Error("Video already exists!")
    }
    console.log(video);
    const item = await repo.create(video);
    return item;
    
  }

  async delete(id: string) {
    const repo = new VideoRepository();
    const item = await repo.getOneVideo({ id });

    if (!item) {
      throw new Error("Video does not exists!");
    }

    await repo.delete(id);
  }

  async update(id: string, video: Video) {
    const repo = new VideoRepository();
    const item = repo.getOneVideo({ id });

    if (!item) {
      throw new Error("Video does not exists!");
    }

    await repo.update(id, video);
    return { id, video };
  }

  async getAll() {
    const repo = new VideoRepository();
    const videos = await repo.getAll();

    return videos;
  }

  async getOne(id: string) {
    const repo = new VideoRepository();
    const item = repo.getOneVideo({ id });

    if (!item) {
      throw new Error("Video does not exists!");
    }

    const video = await repo.getOneVideo({ id });

    return video;
  }
}
