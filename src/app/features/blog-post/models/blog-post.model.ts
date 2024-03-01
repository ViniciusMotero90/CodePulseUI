import { Category } from "../../category/models/category.model";

export interface BlogPost{
    id: string;
    title: string;
    shortDescription: string;
    content: string;
    featureImageUrl: string;
    urlHandle: string;
    author: string;
    publishedDate: Date;
    isVisible: boolean;
    categories: Category[];
}