import {
  Inject,
  type CallHandler,
  type ExecutionContext,
  type NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { EventEmitter2 } from '@nestjs/event-emitter';
import type { Request } from 'express';
import { tap } from 'rxjs';
import { v4 } from 'uuid';
import { Injectable } from '../base/injectable.js';
import { toEventName } from '../helpers/to-event-name.js';
import { OPERATION_NAME_METADATA_KEY } from '../metadata/operation-name.js';
import { RESOURCE_NAME_METADATA_KEY } from '../metadata/resource-name.js';
import type { EventPayload } from '../types/event-payload.js';

/**
 * Interceptor that emits all controller events
 */
@Injectable()
export class ResourceEventInterceptor implements NestInterceptor {
  constructor(
    @Inject(Reflector) protected readonly reflector: Reflector,
    @Inject(EventEmitter2) protected readonly emitter: EventEmitter2
  ) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    const resourceName = this.reflector.get(
      RESOURCE_NAME_METADATA_KEY,
      context.getClass()
    );
    const operationName = this.reflector.get(
      OPERATION_NAME_METADATA_KEY,
      context.getHandler()
    );
    const req = context.switchToHttp().getRequest<Request>();
    const timestamp = Date.now();
    const uuid = v4();
    const EVENT_NAME = toEventName(resourceName, operationName);

    const payload: EventPayload = {
      uuid,
      timestamp,
      req: {
        url: req.url,
        body: req.body,
        params: req.params,
        query: req.query,
      },
    };

    this.emitter.emit(EVENT_NAME, payload);
    return next.handle().pipe(
      tap((body) => {
        payload.res = { body };
        this.emitter.emit(EVENT_NAME, payload);
      })
    );
  }
}
