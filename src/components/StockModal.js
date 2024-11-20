import { Link } from "lucide-react";

export default function StockModal({ stock, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg w-full sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] p-6 space-y-6 animate-premium-modal">
                {/* Stock Name */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{stock.name}</h2>

                {/* Reason of Impact */}
                <div>
                    <h3 className="font-semibold text-sm md:text-lg text-gray-900 mb-3">Reason of Impact</h3>
                    <p className="text-gray-700 text-sm md:text-md">{stock.reason}</p>
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-xs md:text-md">
                        {stock.reasonPoints.map((reasonPoint, idx) => (
                            <li key={idx}>{reasonPoint}</li>
                        ))}
                    </ul>
                </div>

                {/* Fundamental Insights */}

                <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-0">Fundamental Insights</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-0 text-sm md:text-md">
                        <li>Current Market Price: {stock.stockFundamentalInsights.cmp}</li>
                        {/* <li>Order Book: {stock.stockFundamentalInsights.orderBook}</li> */}
                        <li>Book Value: {stock.stockFundamentalInsights.bookValue}</li>
                        {/* <li>Bulk Deals: {stock.stockFundamentalInsights.bulkDeals}</li> */}
                        <li>Market Cap: {stock.stockFundamentalInsights.marketCap}</li>
                        <li>PE Ratio: {stock.stockFundamentalInsights.PE}</li>
                    </ul>
                </div>



                {/* Research Links */}
                <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">Research Links</h3>
                    <div className="flex flex-wrap gap-2">
                        <a
                            href={stock.linksToResearch[0]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline text-sm md:text-base"
                        >
                            <div className="flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-md">
                                <span className="text-md text-gray-800">Screener</span>
                                <Link size={15} color="green" />
                            </div>
                        </a>

                        <a
                            href={stock.linksToResearch[1]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline text-sm md:text-base"
                        >
                            <div className="flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-md">
                                <span className="text-md text-gray-800">Tickertape</span>
                                <Link size={15} color="green" />
                            </div>
                        </a>


                        {/* {stock.linksToResearch.map((link, idx) => (
                            <a
                                key={idx}
                                href={`https://${link}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline text-sm md:text-base"
                            >
                                Research Link {idx + 1}
                            </a>
                        ))} */}
                    </div>
                </div>

                {/* Judgement Section */}
                <div>
                    <div className="flex">
                        <span>Sentiment: </span>
                        <p
                            className={`font-semibold pl-1 text-sm md:text-base ${stock.judgementOverview === "positive" ? "text-green-500" : "text-red-500"
                                }`}
                        >
                            {stock.judgementOverview}
                        </p>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base">{stock.judgement}</p>
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200 text-sm md:text-base"
                >
                    Close
                </button>

                {/* Disclaimer */}
                <p className="text-xs md:text-sm text-red-400 mt-4">
                    <b>Disclaimer</b>: This data is based on the day the news came. Not the current live data.
                </p>
            </div>
        </div>
    );
}