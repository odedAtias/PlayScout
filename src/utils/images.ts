import { Placeholder } from "../assets/images";

export const getOptimizedCardImage = (imageUrl: string): string => {
    if (!imageUrl) {
        return Placeholder;
    }

    const [mediaPath, cropParams] = ['/media/', 'crop/600/400/'];

    // Ensure the URL contains the expected media path
    if (!imageUrl?.includes?.(mediaPath)) {
        throw new Error('Invalid image URL format');
    }

    // Split and reconstruct the URL safely
    const [base, media] = imageUrl?.split(mediaPath);

    return `${base}${mediaPath}${cropParams}${media}`;
};
