import { Param } from '@nestjs/common';


/**
 * Inject property parameter provided in the URL `products/:property/:value` into method parameters
 * @returns ParameterDecorator
 * 
 * 
 * ### Example 
 * 
 * ````typescript
 *    findManyBy(@ParamProperty() property: string,@ParamValue() value: string){ }
 * ````
 */
export function ParamProperty(): ParameterDecorator {
  return (...args) => {
    Param('property')(...args);
  };
}
