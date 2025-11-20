'use client';

import { useState } from 'react';
import CarCard from '@/components/cars/CarCard';
import { getAllCars, filterCars } from '@/lib/cars';
import { CarFilters } from '@/types/car';

export default function CarsPage() {
    const [filters, setFilters] = useState<CarFilters>({});
    const cars = Object.keys(filters).length > 0 ? filterCars(filters) : getAllCars();

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-5xl font-bold mb-8">Our Inventory</h1>

            <div className="grid lg:grid-cols-4 gap-8">
                {/* Filters Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-md p-6 sticky top-32">
                        <h2 className="text-2xl font-bold mb-6">Filters</h2>

                        {/* Price Range */}
                        <div className="mb-6">
                            <label className="block font-semibold mb-2">Price Range</label>
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    className="w-full px-3 py-2 border rounded"
                                    onChange={(e) => setFilters({...filters, priceMin: Number(e.target.value) || undefined})}
                                />
                                <input
                                    type="number"
                                    placeholder="Max"
                                    className="w-full px-3 py-2 border rounded"
                                    onChange={(e) => setFilters({...filters, priceMax: Number(e.target.value) || undefined})}
                                />
                            </div>
                        </div>

                        {/* Year Range */}
                        <div className="mb-6">
                            <label className="block font-semibold mb-2">Year</label>
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    placeholder="From"
                                    className="w-full px-3 py-2 border rounded"
                                    onChange={(e) => setFilters({...filters, yearMin: Number(e.target.value) || undefined})}
                                />
                                <input
                                    type="number"
                                    placeholder="To"
                                    className="w-full px-3 py-2 border rounded"
                                    onChange={(e) => setFilters({...filters, yearMax: Number(e.target.value) || undefined})}
                                />
                            </div>
                        </div>

                        {/* Transmission */}
                        <div className="mb-6">
                            <label className="block font-semibold mb-2">Transmission</label>
                            <select
                                className="w-full px-3 py-2 border rounded"
                                onChange={(e) => setFilters({...filters, transmission: e.target.value || undefined})}
                            >
                                <option value="">All</option>
                                <option value="Automatic">Automatic</option>
                                <option value="Manual">Manual</option>
                            </select>
                        </div>

                        {/* Reset Button */}
                        <button
                            onClick={() => setFilters({})}
                            className="w-full bg-gray-200 py-2 rounded hover:bg-gray-300 transition"
                        >
                            Reset Filters
                        </button>
                    </div>
                </div>

                {/* Car Grid */}
                <div className="lg:col-span-3">
                    <div className="mb-6">
                        <p className="text-gray-600 text-lg">{cars.length} vehicles found</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {cars.map(car => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>

                    {cars.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-xl text-gray-600">No vehicles match your filters</p>
                            <button
                                onClick={() => setFilters({})}
                                className="mt-4 text-blue-600 hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}