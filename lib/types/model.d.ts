export declare type PrimitiveType = number | string | undefined | boolean | bigint | symbol;
export declare type SpecialPrimitive = null | object | Function;
export declare type SimpleObject = Date | RegExp | SpecialPrimitive;
export declare type SimpleType = PrimitiveType | SimpleObject;
