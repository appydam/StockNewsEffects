import { Mail, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h1>
                <p className="text-gray-600 mb-4">
                    Reach out to us using the details below. We’d love to hear from you!
                </p>

                <div className="flex items-center space-x-4 mb-4">
                    <Mail className="text-blue-500" />
                    <a
                        href="mailto:appydam@gmail.com"
                        className="text-gray-800 hover:text-blue-500 transition"
                    >
                        appydam@gmail.com
                    </a>
                </div>

                <div className="flex items-center space-x-4">
                    <Phone className="text-green-500" />
                    <a
                        href="tel:+919971677857"
                        className="text-gray-800 hover:text-green-500 transition"
                    >
                        +91 9971677857
                    </a>
                </div>
            </div>
        </div>
    );
}