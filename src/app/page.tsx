import { newsArticles } from "../data/news";
import News from "../components/News";

export default async function Home() {
  return (
    <div className="container mx-auto p-6">
      {/* <h1 className="text-3xl font-bold mb-6">News Dashboard</h1> */}
      <News newsArticles={newsArticles} />
    </div>
  );
}
