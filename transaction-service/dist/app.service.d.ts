export declare class AppService {
    getHello(): string;
}
export declare class ProductCatalogService {
    private products;
    getProducts(filters?: any): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        featured: boolean;
    }[]>;
    getProductById(id: string): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        featured: boolean;
    }>;
    searchProducts(query: string): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        featured: boolean;
    }[]>;
    getCategories(): Promise<string[]>;
    getFeaturedProducts(): Promise<{
        id: string;
        name: string;
        price: number;
        category: string;
        featured: boolean;
    }[]>;
}
export declare class CheckoutService {
    processCheckout(data: any): Promise<{
        success: boolean;
        order: {
            id: string;
            userId: any;
            items: any;
            total: any;
            status: string;
            paymentMethod: any;
            createdAt: Date;
        };
    }>;
    validateCheckout(data: any): Promise<{
        valid: boolean;
        errors: any[];
        warnings: any[];
    }>;
}
export declare class OrderService {
    private orders;
    findAllOrders(): Promise<any[]>;
    getUserOrders(userId: string): Promise<any[]>;
    findOrderById(id: string): Promise<any>;
    createOrder(data: any): Promise<any>;
    updateOrder(id: string, data: any): Promise<any>;
    cancelOrder(id: string): Promise<any>;
    getOrderReceipt(id: string): Promise<any>;
    refundOrder(id: string, data: any): Promise<any>;
}
export declare class TransactionService {
    private transactions;
    getTransactions(userId?: string): Promise<any[]>;
    getTransactionById(id: string): Promise<any>;
    createTransaction(data: any): Promise<any>;
    getAdminTransactions(): Promise<any[]>;
    getTransactionAnalytics(): Promise<{
        total: number;
        totalAmount: any;
        avgAmount: number;
        dailyTransactions: {};
        topCategories: any[];
    }>;
    exportTransactions(filters: any): Promise<{
        filename: string;
        data: string;
        downloadUrl: string;
    }>;
    private groupTransactionsByDay;
    private getTopCategories;
}
export declare class NotificationService {
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
export declare class CartService {
    private carts;
    findAllCarts(): Promise<any[]>;
    findCartById(id: string): Promise<any>;
    findCartByUserId(userId: string): Promise<any>;
    createCart(data: any): Promise<any>;
    updateCart(id: string, data: any): Promise<any>;
    deleteCart(id: string): Promise<any>;
}
export declare class EventService {
    private events;
    findAllEvents(): Promise<any[]>;
    findEventById(id: string): Promise<any>;
    createEvent(data: any): Promise<any>;
    logCheckoutEvent(data: any): Promise<any>;
    logOrderEvent(data: any): Promise<any>;
}
export declare class PaymentService {
    private payments;
    findAllPayments(): Promise<any[]>;
    findPaymentById(id: string): Promise<any>;
    createPayment(data: any): Promise<any>;
    updatePayment(id: string, data: any): Promise<any>;
    processPayment(data: any): Promise<any>;
    refundPayment(id: string, amount: number): Promise<any>;
}
