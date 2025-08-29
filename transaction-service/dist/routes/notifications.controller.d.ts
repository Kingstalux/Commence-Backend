import { NotificationService } from '../app.service';
export declare class NotificationsController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    sendOrderConfirmation(data: any): Promise<{
        sent: boolean;
        type: string;
    }>;
    sendShippingUpdate(data: any): Promise<{
        sent: boolean;
        type: string;
    }>;
    sendDeliveryConfirmation(data: any): Promise<{
        sent: boolean;
        type: string;
    }>;
}
