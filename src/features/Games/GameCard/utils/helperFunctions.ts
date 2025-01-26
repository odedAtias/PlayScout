import { Placeholder } from "assets/images";

/**
 * Returns a color based on the score value.
 * 
 * - 'orange' for falsy scores (e.g., 0, null, undefined)
 * - 'green' for scores greater than 80
 * - 'yellow' for scores between 71 and 80
 * - 'red' for scores 70 or below
 * 
 * @param score - The score to evaluate.
 * @returns A color string.
 */
export const getColorByScore = (score: number) => !score ? 'orange' : score > 80 ? 'green' : score > 70 ? 'yellow' : 'red';



/**
 * Returns an optimized image URL with a crop applied.
 * 
 * - If the `imageUrl` is falsy, a placeholder image is returned. 
 * - If the `imageUrl` doesn't contain the expected '/media/' path, an error is thrown.
 * - The function appends crop parameters (600x400) to the URL if it's valid.
 *
 * @param imageUrl - The image URL to optimize.
 * @returns A string with the optimized image URL, or a placeholder if the URL is invalid.
 * 
 * @throws Error if the `imageUrl` doesn't contain the expected media path.
 * 
 * @example
 * getOptimizedCardImage('/media/path/to/image.jpg'); // '/media/crop/600/400/path/to/image.jpg'
 * getOptimizedCardImage(''); // 'Placeholder'
 */
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
