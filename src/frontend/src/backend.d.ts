import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Order {
    id: bigint;
    customer: {
        country: string;
        name: string;
        email: string;
        address: string;
        notes?: string;
        phone: string;
    };
    totalAmountCents: bigint;
    placedAt: bigint;
    products: Array<[bigint, bigint]>;
}
export interface Product {
    id: bigint;
    name: string;
    isAvailable: boolean;
    description: string;
    imageUrl: string;
    category: Category;
    priceCents: bigint;
}
export enum Category {
    oil = "oil",
    blends = "blends",
    spices = "spices",
    sweets = "sweets"
}
export interface backendInterface {
    getAllOrders(): Promise<Array<Order>>;
    getOrder(id: bigint): Promise<Order>;
    getProductById(id: bigint): Promise<Product>;
    getProducts(): Promise<Array<Product>>;
    placeOrder(customerData: Order): Promise<bigint>;
}
