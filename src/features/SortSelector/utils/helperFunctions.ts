export const capitalizeFirstLetter = (str: string) => {
    if (!str) return "";
    return str ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : '';
};