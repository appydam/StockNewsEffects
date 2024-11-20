"use client";

// import { useState } from "react";
// import StockModal from "./StockModal";
// import WhyImpact from "./WhyImpact";
// import { Bookmark, Eye, EyeClosed, ExternalLink, Link } from "lucide-react";
// import './styling/styles.css'

// export default function News({ newsArticles }) {
//     const [selectedStock, setSelectedStock] = useState(null);
//     const [isRead, setIsRead] = useState({});
//     const [isBookmarked, setIsBookmarked] = useState({});
//     const [selectedImpact, setSelectedImpact] = useState(null);


//     const toggleReadStatus = (id) => {
//         setIsRead((prevState) => ({ ...prevState, [id]: !prevState[id] }));
//     };

//     const toggleBookmarkStatus = async (id) => {
//         const newBookmarkStatus = !isBookmarked[id];
//         setIsBookmarked((prevState) => ({ ...prevState, [id]: newBookmarkStatus }));

//         try {
//             const response = await fetch("http://localhost:8080/api/user/bookmark", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     newsId: id,
//                     action: newBookmarkStatus ? "save" : "remove",
//                 }),
//             });

//             if (!response.ok) {
//                 console.error("Error updating bookmark:", await response.text());
//             }
//         } catch (error) {
//             console.error("Error connecting to the backend:", error);
//         }
//     };

//     return (
//         <div className="max-w-6xl mx-auto space-y-4">
//             {newsArticles.map((article) => (
//                 <div key={article.id} className="flex bg-white shadow-md rounded-lg p-4">
//                     {/* News Column - Wider */}
//                     <div className="flex-[3] pr-6">
//                         <h2 className="text-xl font-semibold">{article.title}</h2>
//                         <p className="text-gray-500">{article.updatedDate}</p>
//                         <p className="mt-2 text-gray-700">{article.description}</p>

//                         <div className="mt-2 flex flex-wrap gap-2">
//                             {article.sources.map((source, idx) => (
//                                 <a
//                                     key={idx}
//                                     href={source}
//                                     className="text-blue-500 underline"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     <div className="flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-md">
//                                         <span className="text-md text-gray-800">Source {idx + 1}</span>
//                                         <Link size={15} color="green" />
//                                     </div>
//                                 </a>
//                             ))}
//                         </div>

//                     </div>


//                     {/* Affected Stocks Column - Narrower */}
//                     <div className="flex-[2] mr-4 p-4 bg-gray-100 rounded-lg border border-gray-300 flex flex-col justify-between">
//                         {/* Affected Stocks List */}
//                         <div>
//                             <h3 className="text-lg font-semibold mb-2">Affected Stocks</h3>

//                             <div className="flex flex-wrap gap-2">
//                                 {article.affectedStocks.map((stock, idx) => (
//                                     <button
//                                         key={idx}
//                                         onClick={() => setSelectedStock(stock)}
//                                         className="text-blue-500"
//                                     >
//                                         <div className="flex items-center space-x-2 bg-slate-200 px-3 py-1 rounded-md hover:bg-slate-300 transition">
//                                             <span className="text-md text-gray-800">{stock.name}</span>
//                                             <ExternalLink size={15} color="green" />
//                                         </div>
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Why These Stocks Could Impact */}
//                         <button onClick={() => setSelectedImpact(article)}>
//                             <div className="flex items-center mt-4 bg-slate-50 border border-blue-300 p-4 rounded-lg shadow-md">

//                                 <span className="text-md font-semibold text-slate-500 pr-2">Why these stock are impacted?</span>
//                                 <ExternalLink size={20} color="green" />

//                             </div>
//                         </button>
//                     </div>

//                     {/* Controls Column */}
//                     <div className="flex flex-col items-center justify-center space-y-2">
//                         {/* Bookmark Button */}
//                         <button onClick={() => toggleBookmarkStatus(article.id)}>
//                             {isBookmarked[article.id] ? (
//                                 <Bookmark className="text-yellow-500" fill="currentColor" />
//                             ) : (
//                                 <Bookmark className="text-gray-500" />
//                             )}
//                         </button>

//                         {/* Read Status Button */}
//                         <button onClick={() => toggleReadStatus(article.id)}>
//                             {isRead[article.id] ? (
//                                 <Eye className="text-slate-800" />
//                             ) : (
//                                 <EyeClosed className="text-gray-500" />
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             ))}

//             {/* Stock Modal */}
//             {selectedStock && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                     <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg animate-premium-modal relative">
//                         {/* Close Button (optional, for better UX) */}
//                         <button
//                             onClick={() => setSelectedStock(null)}
//                             className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
//                         >
//                             ✕
//                         </button>
//                         <StockModal stock={selectedStock} onClose={() => setSelectedStock(null)} />
//                     </div>
//                 </div>
//             )}

//             {/* Why Impact Modal */}
//             {selectedImpact && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                     <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg animate-premium-modal relative">
//                         <button
//                             onClick={() => setSelectedImpact(null)}
//                             className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
//                         >
//                             ✕
//                         </button>
//                         <WhyImpact stock={selectedImpact} onClose={() => setSelectedImpact(null)} />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }





import { useState, useEffect } from "react";
import StockModal from "./StockModal";
import WhyImpact from "./WhyImpact";
import { Bookmark, Eye, EyeClosed, ExternalLink, Link } from "lucide-react";
import './styling/styles.css';

export default function News({ newsArticles }) {
    const [selectedStock, setSelectedStock] = useState(null);
    const [selectedImpact, setSelectedImpact] = useState(null);
    const [isRead, setIsRead] = useState({});
    const [isBookmarked, setIsBookmarked] = useState({});
    const [sortOption, setSortOption] = useState("latest");
    const [sortedArticles, setSortedArticles] = useState([]);

    // Update sorting logic
    useEffect(() => {
        const now = new Date();
        let sorted = [...newsArticles];

        if (sortOption === "latest") {
            sorted.sort(
                (a, b) => new Date(b.updatedDate) - new Date(a.updatedDate)
            );
        } else if (sortOption === "trending") {
            sorted = sorted.filter(article => {
                const articleDate = new Date(article.updatedDate);
                const diffInDays = (now - articleDate) / (1000 * 60 * 60 * 24);
                return diffInDays <= 4; // Trending articles are 4 days old or less
            });
            sorted.sort(
                (a, b) =>
                    (Object.values(isBookmarked[b.id] || {}).length || 0) -
                    (Object.values(isBookmarked[a.id] || {}).length || 0)
            );
        }

        setSortedArticles(sorted);
    }, [sortOption, newsArticles, isBookmarked]);

    const toggleBookmarkStatus = async (id) => {
        const newBookmarkStatus = !isBookmarked[id];
        setIsBookmarked((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));

        try {
            const response = await fetch("http://localhost:8080/api/user/bookmark", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    newsId: id,
                    action: newBookmarkStatus ? "save" : "remove",
                }),
            });

            if (!response.ok) {
                console.error("Error updating bookmark:", await response.text());
            }
        } catch (error) {
            console.error("Error connecting to the backend:", error);
        }
    };

    const toggleReadStatus = async (id) => {
        const newReadStatus = !isRead[id];
        setIsRead((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));

        try {
            const response = await fetch("http://localhost:8080/api/user/viewed", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    newsId: id,
                    action: newReadStatus ? "save" : "remove",
                }),
            });

            if (!response.ok) {
                console.error("Error updating viewed news:", await response.text());
            }
        } catch (error) {
            console.error("Error connecting to the backend:", error);
        }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-4">
            {/* Sorting Options */}
            <div className="flex justify-end mb-4">
                <label htmlFor="sort" className="mr-2 text-gray-700">
                    Sort by:
                </label>
                <select
                    id="sort"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="latest">Latest</option>
                    <option value="trending">Trending</option>
                </select>
            </div>

            {/* News List */}
            {sortedArticles.map((article) => (
                <div key={article.id} className="flex bg-white shadow-md rounded-lg p-4">
                    {/* News Column - Wider */}
                    <div className="flex-[3] pr-6">
                        <h2 className="text-xl font-semibold">{article.title}</h2>
                        <p className="text-gray-500">{article.updatedDate}</p>
                        <p className="mt-2 text-gray-700">{article.description}</p>

                        <div className="mt-2 flex flex-wrap gap-2">
                            {article.sources.map((source, idx) => (
                                <a
                                    key={idx}
                                    href={source}
                                    className="text-blue-500 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <div className="flex items-center space-x-2 bg-slate-200 px-2 py-1 rounded-md">
                                        <span className="text-md text-gray-800">Source {idx + 1}</span>
                                        <Link size={15} color="green" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Affected Stocks Column - Narrower */}
                    <div className="flex-[2] mr-4 p-4 bg-gray-100 rounded-lg border border-gray-300 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Affected Stocks</h3>
                            <div className="flex flex-wrap gap-2">
                                {article.affectedStocks.map((stock, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedStock(stock)}
                                        className="text-blue-500"
                                    >
                                        <div className="flex items-center space-x-2 bg-slate-200 px-3 py-1 rounded-md hover:bg-slate-300 transition">
                                            <span className="text-md text-gray-800">{stock.name}</span>
                                            <ExternalLink size={15} color="green" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button onClick={() => setSelectedImpact(article)}>
                            <div className="flex items-center mt-4 bg-slate-50 border border-blue-300 p-4 rounded-lg shadow-md">
                                <span className="text-md font-semibold text-slate-500 pr-2">
                                    Why these stocks are impacted?
                                </span>
                                <ExternalLink size={20} color="green" />
                            </div>
                        </button>
                    </div>

                    {/* Controls Column */}
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <button onClick={() => toggleBookmarkStatus(article.id)}>
                            {isBookmarked[article.id] ? (
                                <Bookmark className="text-yellow-500" fill="currentColor" />
                            ) : (
                                <Bookmark className="text-gray-500" />
                            )}
                        </button>
                        <button onClick={() => toggleReadStatus(article.id)}>
                            {isRead[article.id] ? (
                                <Eye className="text-slate-800" />
                            ) : (
                                <EyeClosed className="text-gray-500" />
                            )}
                        </button>
                    </div>
                </div>
            ))}

            {/* Stock Modal */}
            {selectedStock && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
                        <button
                            onClick={() => setSelectedStock(null)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        >
                            ✕
                        </button>
                        <StockModal stock={selectedStock} onClose={() => setSelectedStock(null)} />
                    </div>
                </div>
            )}

            {/* Why Impact Modal */}
            {selectedImpact && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
                        <button
                            onClick={() => setSelectedImpact(null)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        >
                            ✕
                        </button>
                        <WhyImpact stock={selectedImpact} onClose={() => setSelectedImpact(null)} />
                    </div>
                </div>
            )}
        </div>
    );
}