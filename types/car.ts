
export interface Car {
    id: string;
    slug: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    transmission: 'Automatic' | 'Manual';
    fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
    color: string;
    bodyType: string;
    description: string;
    features: string[];
    images: string[];
    condition: 'New' | 'Used' | 'Certified';
    vin?: string;
    isAvailable: boolean;
    isFeatured?: boolean;
}

export interface CarFilters {
    make?: string;
    priceMin?: number;
    priceMax?: number;
    yearMin?: number;
    yearMax?: number;
    transmission?: string;
    fuelType?: string;
}
