export interface AddBlogPost{
    title: string;
    shortDescription: string;
    content: string;
    featureImageUrl: string;
    urlHandle: string;
    author: string;
    publishedDate: Date;
    isVisible: boolean;
}