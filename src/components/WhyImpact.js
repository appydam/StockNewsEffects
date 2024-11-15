export default function WhyImpact({ stock, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full relative transform transition-transform duration-300 ease-out scale-100">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
                    aria-label="Close"
                >
                    &times;
                </button>

                {/* Modal Header */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    Reason for Impact
                </h3>

                {/* Modal Content */}
                <p className="text-gray-600 text-sm md:text-base mb-3 leading-relaxed">
                    {stock.reason}
                </p>

                <h4 className="text-lg font-medium text-gray-700 mb-2">
                    Key Factors:
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4">
                    {stock.reasonOfImpact.map((reasonPoint, idx) => (
                        <li key={idx} className="text-sm md:text-base">
                            {reasonPoint}
                        </li>
                    ))}
                </ul>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
