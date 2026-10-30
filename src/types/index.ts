export type View = 'discover' | 'watchlist';
export interface Movie {
    id: number;
    title: string;
    year: number;
    genre: string;
    rating: number;
    posterUrl: string;
    description: string;
}