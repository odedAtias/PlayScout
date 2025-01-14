export interface Genre {
    games: Game[];
    games_count: number;
    id: number;
    image_background: string;
    name: string;
    slug: string;
    description: string;
};

interface Game {
    id: number;
    slug: string;
    name: string;
    added: number;
};