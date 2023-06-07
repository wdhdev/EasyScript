export function flip(): 0 | 1;
export function id(length: number, amount?: 1): string;
export function id(length: number, amount?: number): string[];
export function log(...input: any[]): void;
export function print(...input: any[]): void;
export function random(max?: number): number;
export function uuid(amount?: 1): string;
export function uuid(amount?: number): string[];

export declare const util: {
  boolToNum(boolean: boolean): 0 | 1;
  boolToStr(boolean: boolean): "true" | "false";
  numToBool(number: 0 | 1): boolean;
  numToStr<N extends number>(number: N): `${N}`;
  removeDuplicates(
    arr: any[],
    multi_dim?: boolean,
    truthy_only?: boolean,
    sort_by?: "alphabetic" | "numeric" | "lengthwise" | "none"
  ): any[];
  strToBool(string: string): boolean;
  strToNum(string: string): number;
};
