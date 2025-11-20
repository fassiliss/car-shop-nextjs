import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-blue-400">AutoShop</h3>
                        <p className="text-gray-400 mb-4">
                            Your trusted source for quality used cars in Franklin, TN. We offer transparent pricing and excellent service.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/cars" className="text-gray-400 hover:text-white transition">Browse Inventory</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Financing Options</li>
                            <li>Trade-In Program</li>
                            <li>Vehicle Inspection</li>
                            <li>Extended Warranty</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li>📍 Franklin, TN 37064</li>
                            <li>📞 <a href="tel:+16155550199" className="hover:text-white">(615) 555-0199</a></li>
                            <li>✉️ <a href="mailto:info@autoshop.com" className="hover:text-white">info@autoshop.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} AutoShop. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}