export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-5xl font-bold mb-8">Contact Us</h1>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Form */}
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block font-semibold mb-2">Name *</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">Email *</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">Phone</label>
                            <input
                                type="tel"
                                className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block font-semibold mb-2">Message *</label>
                            <textarea
                                rows={5}
                                className="w-full px-4 py-3 border rounded-lg focus:border-blue-500 focus:outline-none resize-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info */}
                <div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-6">Visit Our Dealership</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">📍</span>
                                <div>
                                    <h3 className="font-bold mb-1">Address</h3>
                                    <p className="text-gray-600">123 Main Street<br />Franklin, TN 37064</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <h3 className="font-bold mb-1">Phone</h3>
                                    <a href="tel:+16155550199" className="text-blue-600 hover:underline">(615) 555-0199</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">✉️</span>
                                <div>
                                    <h3 className="font-bold mb-1">Email</h3>
                                    <a href="mailto:info@autoshop.com" className="text-blue-600 hover:underline">info@autoshop.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
                        <div className="space-y-2 text-gray-600">
                            <p><strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM</p>
                            <p><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
                            <p><strong>Sunday:</strong> Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}