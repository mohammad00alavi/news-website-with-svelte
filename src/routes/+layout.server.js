import * as sampleData from "../data/sample-data.json";

export function load() {
    return {
        count: sampleData.articles.length,
    };
}
