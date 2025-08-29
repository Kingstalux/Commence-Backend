import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MediaService } from '../app.service';

@Controller()
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @MessagePattern({ cmd: 'admin_get_media' })
  findAll() {
    return this.mediaService.findAllMedia();
  }

  @MessagePattern({ cmd: 'admin_get_media_item' })
  findOne(data: any) {
    return this.mediaService.findMediaById(data.id);
  }

  @MessagePattern({ cmd: 'admin_create_media' })
  create(createMediaDto: any) {
    return this.mediaService.createMedia(createMediaDto);
  }

  @MessagePattern({ cmd: 'admin_update_media' })
  update(data: any) {
    return this.mediaService.updateMedia(data.id, data);
  }

  @MessagePattern({ cmd: 'admin_delete_media' })
  remove(data: any) {
    return this.mediaService.deleteMedia(data.id);
  }
}
