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
import type { EventPayload } from 'src/abtract/event-listener.js';
import { v4 } from 'uuid';
import { createEventName } from '../decorators/helpers/create-event-name.js';
import { OPERATION_NAME_METADATA_KEY } from '../decorators/metadata/operation-name.js';
import { RESOURCE_NAME_METADATA_KEY } from '../decorators/metadata/resource-name.js';
import { Injectable } from '../decorators/resource/injectable.js';

/**
 * Interceptor that emits all controller events
 */
@Injectable()
export class EventInterceptor implements NestInterceptor {
  constructor(
    @Inject(EventEmitter2) protected readonly emitter: EventEmitter2,
    @Inject(Reflector) protected readonly reflector: Reflector
  ) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    const resourceName = this.reflector.get(
      RESOURCE_NAME_METADATA_KEY,
      context.getClass()
    );
    const operationName = this.reflector.get(
      OPERATION_NAME_METADATA_KEY,
      context.getClass()
    );
    const req = context.switchToHttp().getRequest<Request>();
    const timestamp = Date.now();
    const uuid = v4();
    const EVENT_NAME = createEventName(resourceName, operationName);

    const payload: EventPayload = {
      req: {
        timestamp,
        url: req.url,
        uuid,
        body: req.body,
        params: req.params,
        query: req.query,
      },
    };

    return next.handle().pipe(
      tap((body) => {
        payload.res = { body, timestamp, uuid };
        this.emitter.emit(EVENT_NAME, payload);
      })
    );
  }
}
