import { Param, ParseIntPipe } from '@nestjs/common';

/**
 * Inject id parameter provided in the URL such as `product/:id`, `product/1` into the method parameters
 * @returns ParameterDecorator
 *
 * ### Example
 *
 * ````ts
 *    findOneById(@ParamId() id:number){ }
 * ````
 */
export function ParamId(): ParameterDecorator {
  return (...args) => {
    Param('id', ParseIntPipe)(...args);
  };
}
