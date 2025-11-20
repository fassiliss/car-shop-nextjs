import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCarBySlug, getAllCars } from '@/lib/cars';

export default function CarDetailPage({ params }: { params: { slug: string } }) {
    const car = getCarBySlug(params.slug);

    if (!car) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Breadcrumb */}
            <div className="mb-8">
                <Link href="/" className="text-blue-600 hover:underline">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/cars" className="text-blue-600 hover:underline">Inventory</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-600">{car.year} {car.make} {car.model}</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div>
                    <div className="relative h-96 mb-4 rounded-lg overflow-hidden">
                        <Image
                            src={car.images[0]}
                            alt={`${car.year} ${car.make} ${car.model}`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {car.images.length > 1 && (
                        <div className="grid grid-cols-3 gap-4">
                            {car.images.slice(1).map((image, index) => (
                                <div key={index} className="relative h-24 rounded-lg overflow-hidden cursor-pointer">
                                    <Image
                                        src={image}
                                        alt={`${car.make} ${car.model} ${index + 2}`}
                                        fill
                                        className="object-cover hover:scale-110 transition"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Car Details */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {car.year} {car.make} {car.model}
                    </h1>
                    <p className="text-5xl font-bold text-blue-600 mb-8">
                        ${car.price.toLocaleString()}
                    </p>

                    {/* Quick Specs */}
                    <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gray-50 rounded-lg">
                        <div>
                            <p className="text-gray-600 text-sm mb-1">Mileage</p>
                            <p className="font-bold text-lg">{car.mileage.toLocaleString()} mi</p>
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm mb-1">Transmission</p>
                            <p className="font-bold text-lg">{car.transmission}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 text-sm mb-1">Fuel Type</p>
                            <p className="font-bold text-lg">{car.fuelType}</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Description</h2>
                        <p className="text-gray-600 leading-relaxed">{car.description}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Features</h2>
                        <div className="grid grid-cols-2 gap-3">
                            {car.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-green-500">✓</span>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Specifications */}
                    <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Specifications</h2>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Body Type</span>
                                <span className="font-semibold">{car.bodyType}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Color</span>
                                <span className="font-semibold">{car.color}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Condition</span>
                                <span className="font-semibold">{car.condition}</span>
                            </div>
                            {car.vin && (
                                <div className="flex justify-between">
                                    <span className="text-gray-600">VIN</span>
                                    <span className="font-semibold text-sm">{car.vin}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4">
                        <Link href="/contact" className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-center">
                            Schedule Test Drive
                        </Link>
                        <Link href="/contact" className="flex-1 bg-gray-200 text-gray-900 py-4 rounded-lg font-semibold hover:bg-gray-300 transition text-center">
                            Contact Seller
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}