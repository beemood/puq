import { Param } from '@nestjs/common';

/**
 * Inject value parameter provided in the URL `products/:property/:value` into method parameters
 * @returns ParameterDecorator
 * 
 * 
 * ### Example 
 * 
 * ````typescript
 *    findManyBy(@ParamProperty() property: string,@ParamValue() value: string){ }
 * ````
 */
export function ParamValue(): ParameterDecorator {
  return (...args) => {
    Param('value')(...args);
  };
}
