export interface Product {
    id: string;
    image: string;
    isOnSale: boolean;
    title: string;
    price: number;
    originalPrice: number;
    discountPercentage: string;
    category_id: string;
    created_at: Date;
    brand_id: string;
    manufacturingYear: number;
    origin_id: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface Origin {
    id: string;
    name: string;
}

export interface Brand {
    id: string;
    name: string;
}