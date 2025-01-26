export const omitFalsyValues = <T>(object: T): Partial<T> => {
    return Object.entries(object || {}).reduce((acc, [key, value]) => {
        if (value) {
            acc[key as keyof T] = value as T[keyof T];
        }
        return acc;
    }, {} as Partial<T>);
};
