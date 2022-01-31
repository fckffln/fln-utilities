export declare const filterArray: <T>(array: T[], filter: Partial<T>) => T[];
export declare const filterObj: <T>(obj: T, keys: (keyof T)[], values?: any[]) => Partial<T>;
