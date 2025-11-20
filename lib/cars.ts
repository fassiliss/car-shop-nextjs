import { Car, CarFilters } from '@/types/car';

export const cars: Car[] = [
    {
        id: '1',
        slug: '2020-toyota-camry',
        make: 'Toyota',
        model: 'Camry',
        year: 2020,
        price: 24999,
        mileage: 35000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Silver',
        bodyType: 'Sedan',
        description: 'Well-maintained 2020 Toyota Camry with low mileage. Single owner, full service history.',
        features: ['Backup Camera', 'Bluetooth', 'Apple CarPlay', 'Cruise Control', 'Power Windows', 'Air Conditioning'],
        images: [
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop',
            'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        vin: '1HGBH41JXMN109186',
        isAvailable: true,
        isFeatured: true
    },
    {
        id: '2',
        slug: '2019-honda-civic',
        make: 'Honda',
        model: 'Civic',
        year: 2019,
        price: 19999,
        mileage: 45000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Blue',
        bodyType: 'Sedan',
        description: 'Reliable Honda Civic in excellent condition. Great fuel economy.',
        features: ['Backup Camera', 'Bluetooth', 'Lane Assist', 'Adaptive Cruise Control'],
        images: [
            'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: true
    },
    {
        id: '3',
        slug: '2021-ford-f150',
        make: 'Ford',
        model: 'F-150',
        year: 2021,
        price: 34999,
        mileage: 25000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Black',
        bodyType: 'Truck',
        description: 'Powerful Ford F-150 with towing package. Perfect for work or play.',
        features: ['4WD', 'Towing Package', 'Backup Camera', 'Apple CarPlay', 'Power Seats'],
        images: [
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: false
    },
    {
        id: '4',
        slug: '2018-chevrolet-silverado',
        make: 'Chevrolet',
        model: 'Silverado 1500',
        year: 2018,
        price: 29999,
        mileage: 48000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'White',
        bodyType: 'Truck',
        description: 'Heavy-duty Silverado 1500 with crew cab. Perfect for hauling and towing. Well-maintained with new tires.',
        features: ['4WD', 'Backup Camera', 'Towing Package', 'Bluetooth', 'Bed Liner', 'Running Boards'],
        images: [
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: false
    },
    {
        id: '5',
        slug: '2022-tesla-model-3',
        make: 'Tesla',
        model: 'Model 3',
        year: 2022,
        price: 42999,
        mileage: 12000,
        transmission: 'Automatic',
        fuelType: 'Electric',
        color: 'White',
        bodyType: 'Sedan',
        description: 'Like-new Tesla Model 3 with autopilot. Low mileage, one owner. Includes home charging adapter.',
        features: ['Autopilot', 'Premium Interior', 'Glass Roof', 'Heated Seats', '310 Mile Range', 'Supercharging'],
        images: [
            'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: true
    },
    {
        id: '6',
        slug: '2019-mazda-cx5',
        make: 'Mazda',
        model: 'CX-5',
        year: 2019,
        price: 22999,
        mileage: 38000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Red',
        bodyType: 'SUV',
        description: 'Sporty and reliable Mazda CX-5. Perfect family SUV with great fuel economy and safety features.',
        features: ['All-Wheel Drive', 'Blind Spot Monitoring', 'Sunroof', 'Leather Seats', 'Apple CarPlay', 'Backup Camera'],
        images: [
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: false
    },
    {
        id: '7',
        slug: '2020-subaru-outback',
        make: 'Subaru',
        model: 'Outback',
        year: 2020,
        price: 27999,
        mileage: 32000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Green',
        bodyType: 'Wagon',
        description: 'Adventure-ready Subaru Outback with legendary reliability. Perfect for outdoor enthusiasts.',
        features: ['All-Wheel Drive', 'EyeSight Safety', 'Roof Rails', 'Heated Seats', 'X-Mode', 'Apple CarPlay'],
        images: [
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: true
    },
    {
        id: '8',
        slug: '2017-nissan-altima',
        make: 'Nissan',
        model: 'Altima',
        year: 2017,
        price: 15999,
        mileage: 62000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Gray',
        bodyType: 'Sedan',
        description: 'Affordable and reliable Nissan Altima. Great first car or commuter vehicle with excellent gas mileage.',
        features: ['Backup Camera', 'Bluetooth', 'Cruise Control', 'Power Windows', 'Keyless Entry'],
        images: [
            'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: false
    },
    {
        id: '9',
        slug: '2021-jeep-wrangler',
        make: 'Jeep',
        model: 'Wrangler',
        year: 2021,
        price: 38999,
        mileage: 28000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Black',
        bodyType: 'SUV',
        description: 'Iconic Jeep Wrangler Unlimited. Removable top, ready for adventure. Barely driven!',
        features: ['4WD', 'Removable Top', 'Off-Road Package', 'Heated Seats', 'Alpine Sound', 'LED Lights'],
        images: [
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: true
    },
    {
        id: '10',
        slug: '2019-hyundai-tucson',
        make: 'Hyundai',
        model: 'Tucson',
        year: 2019,
        price: 19999,
        mileage: 41000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Blue',
        bodyType: 'SUV',
        description: 'Practical and efficient Hyundai Tucson. Great value with remaining factory warranty.',
        features: ['Backup Camera', 'Bluetooth', 'Apple CarPlay', 'Blind Spot Detection', 'Lane Keep Assist'],
        images: [
            'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: false
    },
    {
        id: '11',
        slug: '2018-bmw-3-series',
        make: 'BMW',
        model: '330i',
        year: 2018,
        price: 28999,
        mileage: 44000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Black',
        bodyType: 'Sedan',
        description: 'Luxury sport sedan with powerful engine. Premium sound system and leather interior. Meticulously maintained.',
        features: ['Sunroof', 'Leather Seats', 'Navigation', 'Heated Seats', 'Premium Sound', 'Sport Package'],
        images: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: false
    },
    {
        id: '12',
        slug: '2020-kia-sorento',
        make: 'Kia',
        model: 'Sorento',
        year: 2020,
        price: 26999,
        mileage: 36000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'White',
        bodyType: 'SUV',
        description: '3-row family SUV with room for 7. Perfect for growing families. Excellent safety ratings.',
        features: ['3rd Row Seating', 'Backup Camera', 'Blind Spot Monitor', 'Apple CarPlay', 'Heated Seats', 'Power Liftgate'],
        images: [
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: false
    },
    {
        id: '13',
        slug: '2017-dodge-ram-1500',
        make: 'Dodge',
        model: 'Ram 1500',
        year: 2017,
        price: 26999,
        mileage: 55000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Silver',
        bodyType: 'Truck',
        description: 'Powerful Ram 1500 with Hemi V8. Great for work or recreation. Tow package included.',
        features: ['Hemi V8', 'Towing Package', '4WD', 'Backup Camera', 'Bluetooth', 'Bed Cover'],
        images: [
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: false
    },
    {
        id: '14',
        slug: '2021-volkswagen-jetta',
        make: 'Volkswagen',
        model: 'Jetta',
        year: 2021,
        price: 21999,
        mileage: 18000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Gray',
        bodyType: 'Sedan',
        description: 'Modern and efficient VW Jetta with low miles. German engineering with great fuel economy.',
        features: ['Backup Camera', 'Apple CarPlay', 'Blind Spot Monitor', 'Adaptive Cruise', 'LED Headlights'],
        images: [
            'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: false
    },
    {
        id: '15',
        slug: '2019-audi-q5',
        make: 'Audi',
        model: 'Q5',
        year: 2019,
        price: 35999,
        mileage: 32000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Black',
        bodyType: 'SUV',
        description: 'Premium luxury SUV with Quattro all-wheel drive. Virtual cockpit and premium interior.',
        features: ['Quattro AWD', 'Virtual Cockpit', 'Panoramic Sunroof', 'Leather Seats', 'Navigation', 'Bang & Olufsen Sound'],
        images: [
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: false
    },
    {
        id: '16',
        slug: '2020-gmc-sierra',
        make: 'GMC',
        model: 'Sierra 1500',
        year: 2020,
        price: 37999,
        mileage: 29000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'Blue',
        bodyType: 'Truck',
        description: 'Premium GMC Sierra with Denali package. Luxury truck with powerful performance.',
        features: ['Denali Package', 'Leather Interior', 'Sunroof', 'Towing Package', 'Bose Sound', 'Heated/Cooled Seats'],
        images: [
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: false
    },
    {
        id: '17',
        slug: '2018-mercedes-c-class',
        make: 'Mercedes-Benz',
        model: 'C300',
        year: 2018,
        price: 31999,
        mileage: 39000,
        transmission: 'Automatic',
        fuelType: 'Gasoline',
        color: 'White',
        bodyType: 'Sedan',
        description: 'Elegant Mercedes C-Class with premium features. Smooth ride and luxurious interior.',
        features: ['Sunroof', 'Leather Seats', 'Navigation', 'Heated Seats', 'Burmester Sound', 'LED Headlights'],
        images: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: true
    },
    {
        id: '18',
        slug: '2021-toyota-rav4',
        make: 'Toyota',
        model: 'RAV4',
        year: 2021,
        price: 29999,
        mileage: 22000,
        transmission: 'Automatic',
        fuelType: 'Hybrid',
        color: 'Silver',
        bodyType: 'SUV',
        description: 'Hybrid RAV4 with excellent fuel economy. Toyota reliability with modern technology.',
        features: ['Hybrid Engine', 'All-Wheel Drive', 'Apple CarPlay', 'Adaptive Cruise', 'Lane Assist', 'Power Liftgate'],
        images: [
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop'
        ],
        condition: 'Used',
        isAvailable: true,
        isFeatured: true
    },
];

export function getAllCars(): Car[] {
    return cars.filter(car => car.isAvailable);
}

export function getFeaturedCars(): Car[] {
    return cars.filter(car => car.isFeatured && car.isAvailable);
}

export function getCarBySlug(slug: string): Car | undefined {
    return cars.find(car => car.slug === slug && car.isAvailable);
}

export function filterCars(filters: CarFilters): Car[] {
    return cars.filter(car => {
        if (!car.isAvailable) return false;
        if (filters.make && car.make !== filters.make) return false;
        if (filters.priceMin && car.price < filters.priceMin) return false;
        if (filters.priceMax && car.price > filters.priceMax) return false;
        if (filters.yearMin && car.year < filters.yearMin) return false;
        if (filters.yearMax && car.year > filters.yearMax) return false;
        if (filters.transmission && car.transmission !== filters.transmission) return false;
        return true;
    });
}