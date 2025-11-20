import Link from 'next/link';
import Image from 'next/image';
import { Car } from '@/types/car';

interface CarCardProps {
    car: Car;
}

export default function CarCard({ car }: CarCardProps) {
    return (
        <Link href={`/cars/${car.slug}`}>
            <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                    <Image
                        src={car.images[0]}
                        alt={`${car.year} ${car.make} ${car.model}`}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {car.isFeatured && (
                        <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
                    )}
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition">
                        {car.year} {car.make} {car.model}
                    </h3>

                    <p className="text-3xl font-bold text-blue-600 mb-4">
                        ${car.price.toLocaleString()}
                    </p>

                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                        <span>🕐 {car.mileage.toLocaleString()} mi</span>
                        <span>⚙️ {car.transmission}</span>
                        <span>⚡ {car.fuelType}</span>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                        View Details →
                    </button>
                </div>
            </div>
        </Link>
    );
}
