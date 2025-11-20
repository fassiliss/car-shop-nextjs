import Link from 'next/link';
import CarCard from '@/components/cars/CarCard';
import { getFeaturedCars } from '@/lib/cars';
import Image from 'next/image';

export default function Home() {
    const featuredCars = getFeaturedCars();

    return (
        <>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <Image
                    src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1920&h=1080&fit=crop"
                    alt="Luxury car"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />

                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                        Find Your Perfect Car
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                        Quality used vehicles with transparent pricing and excellent service
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link href="/cars" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg">
                            Browse Inventory
                        </Link>
                        <Link href="/contact" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition shadow-lg">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Cars */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Featured Vehicles</h2>
                    <p className="text-xl text-gray-600 text-center mb-12">Check out our hand-picked selection</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {featuredCars.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/cars" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition">
                            View All Vehicles →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Choose AutoShop</h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center p-8 rounded-lg bg-gray-50">
                            <div className="text-6xl mb-4">🚗</div>
                            <h3 className="text-2xl font-bold mb-4">Quality Vehicles</h3>
                            <p className="text-gray-600">Every car is thoroughly inspected with detailed history reports</p>
                        </div>
                        <div className="text-center p-8 rounded-lg bg-gray-50">
                            <div className="text-6xl mb-4">💰</div>
                            <h3 className="text-2xl font-bold mb-4">Fair Pricing</h3>
                            <p className="text-gray-600">Transparent pricing with no hidden fees or surprises</p>
                        </div>
                        <div className="text-center p-8 rounded-lg bg-gray-50">
                            <div className="text-6xl mb-4">🤝</div>
                            <h3 className="text-2xl font-bold mb-4">Excellent Service</h3>
                            <p className="text-gray-600">Friendly staff, financing options, and after-sales support</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}