import {
  Inject,
  Optional,
  type CallHandler,
  type ExecutionContext,
  type NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import {
  isResourceOperationNameOrThrow
} from '@puq/names';
import type { Any } from '@puq/types';
import type { Request } from 'express';
import { map, type Observable } from 'rxjs';
import { Injectable } from '../base/injectable.js';
import { InjectTransformers } from '../providers/transformers.provider.js';
import type { ResourceTransformers } from '../types/resource-transformers.js';

@Injectable()
export class ResourceTransformInterceptor implements NestInterceptor {
  constructor(
    @Inject(Reflector) protected readonly reflector: Reflector,
    @Optional()
    @InjectTransformers()
    protected readonly transformers?: ResourceTransformers
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<Any>
  ): Observable<Any> | Promise<Observable<Any>> {
    const req = context.switchToHttp().getRequest<Request>();
    const handlerName = context.getHandler().name;

    isResourceOperationNameOrThrow(handlerName);

    const transformers = this.transformers?.[handlerName];

    if (transformers) {
      if (typeof transformers.body === 'function') {
        req.body = transformers.body(req.body);
      }
      if (typeof transformers.query === 'function') {
        req.query = transformers.query(req.query);
      }
      if (typeof transformers.params === 'function') {
        req.params = transformers.params(req.params);
      }
    }

    return next.handle().pipe(
      map((value) => {
        if (typeof transformers?.response === 'function') {
          return transformers.response(value);
        }
        return value;
      })
    );
  }
}
