import * as sampleData from "../data/sample-data.json";

export function load() {
    return {
        articles: sampleData.articles.map((article) => ({
            title: article.title,
            author: article.author,
            description: article.description,
            urlToImage: article.urlToImage,
            publishedAt: article.publishedAt,
        })),
    };
}
