/* eslint-disable @typescript-eslint/no-empty-object-type */
export type AnyRecord<T, A = any> = Record<keyof T, A>;
export type StringRecord<T extends object> = AnyRecord<T, string>;
export type NumberRecord<T extends object> = AnyRecord<T, number>;
export type BooleanRecord<T extends object> = AnyRecord<T, boolean>;
export type EmptyObject = {};
