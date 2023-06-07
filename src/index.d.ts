export function flip(): 0 | 1;
export function id(length: number, amount?: 1): string;
export function id(length: number, amount?: number): string[];
export function log(...input: any[]): void;
export function print(...input: any[]): void;
export function random(max?: number): number;
export function uuid(amount?: 1): string;
export function uuid(amount?: number): string[];

export declare const util: {
    boolToNum<B extends boolean>(boolean: B): B extends true ? 1 : 0;
    boolToStr<B extends boolean>(boolean: B): B extends true ? "true" : false;
    numToBool<N extends 0 | 1>(number: N): N extends 1 ? true : false;
    numToStr<N extends number>(number: N): `${N}`;
    removeDuplicates(
        arr: any[],
        multi_dim?: boolean,
        truthy_only?: boolean,
        sort_by?: "alphabetic" | "numeric" | "lengthwise" | "none"
    ): any[];
    strToBool<S extends "true" | "false">(
        string: S
    ): S extends "true" ? true : false;
    strToNum(string: string): number;
};
