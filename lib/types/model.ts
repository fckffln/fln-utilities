export type PrimitiveType =
    number |
    string |
    undefined |
    boolean |
    bigint |
    symbol;

export type SpecialPrimitive =
    null |
    object |
    Function;


export type SimpleObject =  Date | RegExp | SpecialPrimitive;

export type SimpleType = PrimitiveType | SimpleObject;
