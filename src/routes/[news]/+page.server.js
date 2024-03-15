import * as sampleData from "../../data/sample-data.json";
import { error } from "@sveltejs/kit";

export function load({ params }) {
    const article = sampleData.articles.find(
        (val) => val.title === decodeURIComponent(params.news)
    );
    if (!article) {
        throw error(404);
    }
    return {
        article,
    };
}
