import type { ParamDecoratorEnhancer } from '@nestjs/common';
import { Param as NestParam } from '@nestjs/common';

export function Param(): ParamDecoratorEnhancer {
  return (...args) => {
    NestParam()(...args);
  };
}
