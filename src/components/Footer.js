import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
                    <p className="text-sm">
                        Stay updated with the latest stock news and insights. Empower your financial decisions with real-time data and expert analysis.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/about" className="hover:text-white transition">About</a>
                        </li>
                        <li>
                            <a href="/stocks" className="hover:text-white transition">Stocks</a>
                        </li>
                        <li>
                            <a href="/news" className="hover:text-white transition">News</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-white transition">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <Facebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <Twitter />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <Linkedin />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <Instagram />
                        </a>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
                    <p className="text-sm mb-4">
                        Subscribe to our newsletter for updates and tips.
                    </p>
                    <form className="flex space-x-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-md focus:outline-none text-gray-900"
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Legal Links */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center">
                <p className="text-sm">© {new Date().getFullYear()} StockNewsEffects Inc. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="/terms" className="hover:text-white text-sm">Terms of Service</a>
                    <a href="/privacy" className="hover:text-white text-sm">Privacy Policy</a>
                    <a href="/sitemap" className="hover:text-white text-sm">Sitemap</a>
                </div>
            </div>
        </footer>
    );
}