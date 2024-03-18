import * as sampleData from "../data/sample-data.json";

const apiKey = import.meta.env.VITE_API_KEY;

export async function load({ url }) {
    const searchTerm = url.searchParams.get("q") || "";
    if (searchTerm.length >= 3) {
        try {
            const res = await fetch(
                `https://newsapi.org/v2/everything?q=${searchTerm.toLowerCase()}&from=2024-03-10&lang=en&pageSize=30&sortBy=popularity&apiKey=${apiKey}`
            );
            const data = await res.json();
            const filteredArticles = data.articles.filter(
                (article) => article.urlToImage && article.author
            );
            return {
                articles: filteredArticles,
            };
        } catch (err) {
            console.error("Error fetching data from API:", err);
            return {
                articles: sampleData.articles,
            };
        }
    } else {
        return {
            articles: [],
        };
    }
}
