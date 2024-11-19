export interface PlatfromsFetchResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Platform[];
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
    image: string | null;
    year_start: number | null;
    year_end: number | null;
}