import { ClassConstructor } from '../common/class-constructor.js';

export type PropertyType =
  | 'string'
  | 'number'
  | 'integer'
  | 'boolean'
  | 'object'
  | 'array'
  | 'date';

export type StringFormat = 'email' | 'password';

export type NumberFormat = 'fraction' | 'percent';

export type IntegerFormat = 'rate' | 'percent';

export type CommonOptions = {
  type: PropertyType;
  required?: boolean;
  transform?: boolean;
  expose?: boolean;
};

export type DefaultValueOptions<T> = {
  defaultValue?: T;
};

export type StringOptions = {
  type: 'string';
  minLength?: number;
  maxLength?: number;
  format?: StringFormat;
  isIn?: string[];
  isNotIn?: string[];
  notEmpty?:boolean
} & DefaultValueOptions<string>;

export type CommonNumberOptions = {
  minimum?: number;
  maximum?: number;
  isIn?: number[];
  isNotIn?: number[];
};

export type NumberOptions = {
  type: 'number';
  format?: NumberFormat;
} & DefaultValueOptions<number> &
  CommonNumberOptions;

export type IntegerOptions = {
  type: 'integer';
  format?: IntegerFormat;
} & DefaultValueOptions<number> &
  CommonNumberOptions;

export type BooleanOptions = {
  type: 'boolean';
} & DefaultValueOptions<string>;

export type ObjectOptions = {
  type: 'object';
  target: () => ClassConstructor;
} & DefaultValueOptions<object>;

export type DateOptions = {
  type: 'date';
  maxDate?: Date;
  minDate?: Date;
  futureDate?: boolean;
  pastDate?: boolean;
} & DefaultValueOptions<Date>;

export type ArrayOptions = {
  type: 'array';
  items: PropertyOptions;
  maxSize?: number;
  minSize?: number;
} & DefaultValueOptions<any[]>;

export type PropertyOptions = CommonOptions &
  (
    | StringOptions
    | NumberOptions
    | IntegerOptions
    | BooleanOptions
    | DateOptions
    | ObjectOptions
    | ArrayOptions
  );
