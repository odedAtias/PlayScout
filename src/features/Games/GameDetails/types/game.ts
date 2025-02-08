import { Rating, AddedByStatus, ParentPlatform, Platform, Store, Genre } from "features/Games/GamesList/types";

export interface GameDetails {
    id: number;
    slug: string;
    name: string;
    name_original: string;
    description: string;
    description_raw: string;
    metacritic: number;
    released: string;
    updated: string;
    background_image: string;
    background_image_additional: string;
    website: string;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    reactions: Record<string, number>;
    added: number;
    added_by_status: AddedByStatus;
    playtime: number;
    screenshots_count: number;
    movies_count: number;
    creators_count: number;
    achievements_count: number;
    parent_achievements_count: number;
    reddit_url: string;
    reddit_count: number;
    twitch_count: number;
    youtube_count: number;
    reviews_text_count: number;
    ratings_count: number;
    suggestions_count: number;
    alternative_names: string[];
    metacritic_url: string;
    parents_count: number;
    additions_count: number;
    game_series_count: number;
    user_game: null | any;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    parent_platforms: ParentPlatform[];
    platforms: Platform[];
    stores: Store[];
    publishers: Publisher[];
    genres: Genre[];
}

export interface Publisher {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
};

export interface Trailer {
    id: number;
    name: string;
    preview: string;
    data: {
        480: string;
        max: string;
    };
}

export interface Screenshot {
    id: number;
    image: string;
    width: number;
    height: number;
    is_deleted: boolean;
}