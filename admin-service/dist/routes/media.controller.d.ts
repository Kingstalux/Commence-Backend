import { MediaService } from '../app.service';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    findAll(): Promise<any[]>;
    findOne(data: any): Promise<any>;
    create(createMediaDto: any): Promise<any>;
    update(data: any): Promise<any>;
    remove(data: any): Promise<any>;
}
