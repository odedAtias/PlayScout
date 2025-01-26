// Third party libraries imports
import { describe, it, expect } from 'vitest';
// FS imports
import { getColorByScore, getOptimizedCardImage } from 'features/Games/GameCard/utils'; // שנה את הנתיב למיקום המתאים של הפונקציה
import { Placeholder } from 'src/assets/images';

describe('getColorByScore', () => {
    it('should return "orange" for 0 or falsy scores', () => {
        expect(getColorByScore(0)).toBe('orange');
    });

    it('should return "green" for scores greater than 80', () => {
        expect(getColorByScore(81)).toBe('green');
        expect(getColorByScore(100)).toBe('green');
    });

    it('should return "yellow" for scores between 71 and 80', () => {
        expect(getColorByScore(75)).toBe('yellow');
        expect(getColorByScore(80)).toBe('yellow');
    });

    it('should return "red" for scores 70 or below', () => {
        expect(getColorByScore(70)).toBe('red');
        expect(getColorByScore(50)).toBe('red');
        expect(getColorByScore(0.004)).toBe('red');
        expect(getColorByScore(0.000000003)).toBe('red');
    });
});

describe('getOptimizedCardImage', () => {
  it('should return placeholder if the imageUrl is falsy', () => {
    expect(getOptimizedCardImage('')).toBe(Placeholder);
  });

  it('should throw an error if the imageUrl does not contain the "/media/" path', () => {
    expect(() => getOptimizedCardImage('invalid/path/to/image.jpg')).toThrow('Invalid image URL format');
  });

  it('should return the optimized image URL with crop parameters', () => {
    const imageUrl = '/media/path/to/image.jpg';
    const expectedUrl = '/media/crop/600/400/path/to/image.jpg';
    expect(getOptimizedCardImage(imageUrl)).toBe(expectedUrl);
  });

  it('should handle URLs with additional segments after the media path', () => {
    const imageUrl = '/media/path/to/another/image.jpg';
    const expectedUrl = '/media/crop/600/400/path/to/another/image.jpg';
    expect(getOptimizedCardImage(imageUrl)).toBe(expectedUrl);
  });

  it('should throw an error if the imageUrl is missing the "/media/" path', () => {
    const imageUrl = '/other/path/to/image.jpg';
    expect(() => getOptimizedCardImage(imageUrl)).toThrow('Invalid image URL format');
  });
});