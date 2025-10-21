/* eslint-disable @typescript-eslint/no-explicit-any */

export type Any = any;

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type Unkown<T> = T | unknown;

export type PickRequired<T, K extends keyof T> =
  | Required<Pick<T, K>>
  | Partial<Omit<T, K>>;

export type PickOptional<T, K extends keyof T> =
  | Partial<Pick<T, K>>
  | Required<Omit<T, K>>;

export type DecoratorType =
  | ClassDecorator
  | MethodDecorator
  | ParameterDecorator;

export interface ClassType<T = Any> {
  new (...args: Any[]): T;
}

export type Keys<T> = (keyof T)[];

export type Predicate<T> = (value: T) => boolean;
