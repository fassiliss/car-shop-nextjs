export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-5xl font-bold mb-8">About AutoShop</h1>

            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        Welcome to AutoShop, your trusted source for quality used cars in Franklin, Tennessee.
                        We've been serving the community for over 10 years with honest, transparent service.
                    </p>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Our mission is simple: provide high-quality vehicles at fair prices with exceptional customer service.
                        Every car in our inventory is thoroughly inspected and comes with a detailed history report.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                        <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                        <p className="text-gray-600">Happy Customers</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                        <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                        <p className="text-gray-600">Years in Business</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                        <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                        <p className="text-gray-600">Vehicles in Stock</p>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="text-green-500 text-2xl">✓</span>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Quality Inspection</h3>
                                <p className="text-gray-600">Every vehicle undergoes a comprehensive 150-point inspection</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-500 text-2xl">✓</span>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Transparent Pricing</h3>
                                <p className="text-gray-600">No hidden fees, no haggling - just fair, upfront pricing</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-500 text-2xl">✓</span>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Financing Options</h3>
                                <p className="text-gray-600">We work with multiple lenders to get you the best rates</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-500 text-2xl">✓</span>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Extended Warranties</h3>
                                <p className="text-gray-600">Optional extended warranty coverage for peace of mind</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}