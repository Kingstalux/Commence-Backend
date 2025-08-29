import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MediaService } from '../app.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Get()
  findAll() {
    return this.mediaService.findAllMedia();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediaService.findMediaById(id);
  }

  @Post()
  create(@Body() createMediaDto: any) {
    return this.mediaService.createMedia(createMediaDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMediaDto: any) {
    return this.mediaService.updateMedia(id, updateMediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mediaService.deleteMedia(id);
  }
}
