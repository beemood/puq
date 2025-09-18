import {
    Inject,
    type CallHandler,
    type ExecutionContext,
    type NestInterceptor,
} from '@nestjs/common';
import type { Request } from 'express';
import type { Observable } from 'rxjs';

export class ValidationInterceptor implements NestInterceptor {
  constructor(
    @Inject('RESOURCE_VALIDATORS')
    protected readonly validator: Record<string, (value: any) => any>
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    const req = context.switchToHttp().getRequest<Request>();

    req.body = this.validator[''](req.body);
    req.query = this.validator[''](req.query);
    req.params = this.validator[''](req.params);
    return next.handle();
  }
}
