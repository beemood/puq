import {
  ArrayOptions,
  BooleanOptions,
  CommonNumberOptions,
  CommonOptions,
  DateOptions,
  IntegerOptions,
  NumberOptions,
  ObjectOptions,
  PropertyOptions,
  StringOptions,
} from '@puq/types';

import {
  ArrayMaxSize,
  IsArray,
  IsBoolean,
  IsDateString,
  IsDefined,
  IsEmail,
  IsIn,
  IsInt,
  isJSON,
  IsNotEmpty,
  IsNotIn,
  IsNumber,
  IsObject,
  IsString,
  IsStrongPassword,
  Max,
  MaxDate,
  MaxLength,
  Min,
  MinDate,
  MinLength,
  ValidateNested,
  ValidationOptions,
} from 'class-validator';
import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { ApiPropertyOptions, ApiSchemaOptions } from '@nestjs/swagger';

export function toApiPropertyOptions(
  options: PropertyOptions
): ApiPropertyOptions {
  const { type } = options;

  const required = options.required == true;
  const nullable = options.required != true;

  switch (type) {
    case 'string': {
      return { type: 'string', required, nullable };
    }
    case 'number': {
      return { type: 'number', required, nullable };
    }
    case 'boolean': {
      return { type: 'boolean', required, nullable };
    }
    case 'object': {
      return { type: options.target(), required, nullable };
    }
    case 'integer': {
      return { type: 'string', required, nullable };
    }
    case 'array': {
      return {
        type: 'array',
        items: toApiPropertyOptions(options.items) as ApiSchemaOptions,
        required,
        nullable,
      };
    }
    case 'date': {
      return {
        type: 'string',
        format: 'date',
        required,
        nullable,
      };
    }
  }
}

export function Dto(): ClassDecorator {
  return (...args) => {
    Exclude()(...args);
  };
}

export function JsonTransformer(): PropertyDecorator {
  return (...args) => {
    Transform(({ value }) => {
      if (isJSON(value)) {
        return JSON.parse(value);
      }
      return value;
    })(...args);
  };
}

export function CommonProp(
  options: CommonOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    if (options.required === true) IsDefined(validationOptions)(...args);
    if (options.transform == true) JsonTransformer()(...args);
    if (options.expose != false) {
      Expose()(...args);
    } else {
      Exclude()(...args);
    }
  };
}

export function StringProp(
  options: StringOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    const { minLength, maxLength, format, isIn, isNotIn, notEmpty } = options;

    IsString(validationOptions)(...args);

    if (minLength != undefined)
      MinLength(minLength, validationOptions)(...args);

    if (maxLength != undefined)
      MaxLength(maxLength, validationOptions)(...args);

    if (isIn != undefined) IsIn(isIn, validationOptions)(...args);

    if (isNotIn != undefined) IsNotIn(isNotIn, validationOptions)(...args);

    if (notEmpty != undefined) IsNotEmpty(validationOptions)(...args);

    if (format) {
      switch (format) {
        case 'email': {
          IsEmail({}, validationOptions)(...args);
          break;
        }
        case 'password': {
          IsStrongPassword({}, validationOptions)(...args);
          break;
        }
      }
    }
  };
}

export function CommonNumberProp(
  options: CommonNumberOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    const { maximum, minimum, isIn, isNotIn } = options;

    if (maximum != undefined) Max(maximum, validationOptions)(...args);

    if (minimum != undefined) Min(minimum, validationOptions)(...args);

    if (isIn != undefined) IsIn(isIn, validationOptions)(...args);

    if (isNotIn != undefined) IsNotIn(isNotIn, validationOptions)(...args);
  };
}

export function NumberProp(
  options: NumberOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    const { format } = options;

    CommonNumberProp(options, validationOptions)(...args);

    IsNumber({}, validationOptions)(...args);

    if (format) {
      switch (format) {
        case 'fraction': {
          Min(0, validationOptions)(...args);
          Max(1, validationOptions)(...args);
          break;
        }
        case 'percent': {
          Min(0, validationOptions)(...args);
          Max(100, validationOptions)(...args);
          break;
        }
      }
    }
  };
}

export function IntegerProp(
  options: IntegerOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    const { format } = options;

    IsInt(validationOptions)(...args);

    CommonNumberProp(options, validationOptions)(...args);

    if (format) {
      switch (format) {
        case 'rate': {
          Min(0, validationOptions)(...args);
          Max(5, validationOptions)(...args);

          break;
        }
        case 'percent': {
          Min(0, validationOptions)(...args);
          Max(100, validationOptions)(...args);
          break;
        }
      }
    }
  };
}

export function BooleanProp(
  options: BooleanOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsBoolean(validationOptions)(...args);
  };
}

export function DateProp(
  options: DateOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    const { maxDate, minDate } = options;

    IsDateString({}, validationOptions)(...args);
    if (maxDate != undefined) MaxDate(maxDate, validationOptions)(...args);
    if (minDate != undefined) MinDate(minDate, validationOptions)(...args);
  };
}

export function ObjectProp(
  options: ObjectOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsObject(validationOptions)(...args);
    ValidateNested(validationOptions)(...args);
    Type(options.target)(...args);
  };
}

export function ArrayProp(
  options: ArrayOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    IsArray(validationOptions)(...args);

    const { maxSize, minSize } = options;

    if (maxSize != undefined) ArrayMaxSize(maxSize, validationOptions)(...args);
    if (minSize != undefined) ArrayMaxSize(minSize, validationOptions)(...args);
  };
}

export function Prop(
  options: PropertyOptions,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return (...args) => {
    const { type } = options;

    if (type != 'array') {
      CommonProp(options, validationOptions)(...args);
    }

    switch (type) {
      case 'string': {
        StringProp(options, validationOptions)(...args);
        break;
      }
      case 'integer': {
        IntegerProp(options, validationOptions)(...args);
        break;
      }
      case 'number': {
        NumberProp(options, validationOptions)(...args);
        break;
      }
      case 'boolean': {
        BooleanProp(options, validationOptions)(...args);
        break;
      }
      case 'date': {
        DateProp(options, validationOptions)(...args);
        break;
      }
      case 'object': {
        ObjectProp(options, validationOptions)(...args);
        break;
      }
      case 'array': {
        ArrayProp(options, validationOptions)(...args);
        Prop(options.items, { ...validationOptions, each: true })(...args);
        break;
      }
    }
  };
}
