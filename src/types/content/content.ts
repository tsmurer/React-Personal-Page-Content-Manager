export type Content = {
    id?: number,
    published: boolean,
    body: string,
    title: string,
    slug: string,
    tags: string[],
    publishedAt?: Date
}