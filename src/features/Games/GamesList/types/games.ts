import { orderType } from "features/SortSelector/types";

export interface Game {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Rating[];
    ratings_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: AddedByStatus;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    user_game: null | any;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    platforms: Platform[];
    parent_platforms: ParentPlatform[];
    genres: Genre[];
    stores: Store[];
    clip: null | any;
    tags: Tag[];
}
export interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
}

export interface AddedByStatus {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
}

export interface Platform {
    platform: PlatformDetails;
    released_at: string;
    requirements_en?: Requirements | null;
    requirements_ru?: string | null;
}

interface PlatformDetails {
    id: number;
    name: string;
    slug: string;
    image?: string | null;
    year_end?: number | null;
    year_start?: number | null;
    games_count: number;
    image_background: string;
}

interface Requirements {
    minimum: string;
    recommended?: string | null;
}

export interface ParentPlatform {
    platform: PlatformDetailsShort;
}

export interface PlatformDetailsShort {
    id: number;
    name: string;
    slug: string;
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
}

export interface Store {
    id: number;
    store: StoreDetails;
}

interface StoreDetails {
    id: number;
    name: string;
    slug: string;
    domain: string;
    games_count: number;
    image_background: string;
}

export interface Tag {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
}

export interface Params {
    genres: number | null;
    parent_platforms: number | null;
    ordering: orderType | null;
    page_size: number;
    search: string;
}