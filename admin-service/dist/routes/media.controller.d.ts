import { MediaService } from '../app.service';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    findAll(): any[];
    findOne(id: string): {};
    create(createMediaDto: any): {};
    update(id: string, updateMediaDto: any): {};
    remove(id: string): {};
}
