export interface Book {
    id: string;
    title: string;
    subtitle: string;
    authors: Array<any>;
    description: string;
    cover: string;
}

export interface FavoriteBook {
    id: string;
    title: string;
    subtitle: string;
    cover: string;
}
