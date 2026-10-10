export interface Category {
    slug: string;
    title: string;
    topicId: string | null; 
    url: string;
    scrapable: boolean;
}

export interface CategoriesApiResponse {
    success: boolean;
    count: number;
    cachedAt: string;
    data: Category[];
}