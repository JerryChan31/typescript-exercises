type strUtilFunc = (str: string) => string;
declare module 'str-utils' {
    export const strReverse: strUtilFunc;
    export const strToLower: strUtilFunc;
    export const strToUpper: strUtilFunc;
    export const strRandomize: strUtilFunc;
    export const strInvertCase: strUtilFunc;
}
