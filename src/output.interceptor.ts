import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { ServerResponse, IncomingMessage } from 'http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OutputInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>
  ): Observable<any> | Promise<Observable<any>> {
    const res = context.switchToHttp().getResponse();
        res.set({
          'Content-Type': 'application/json', 
          'Cross-Origin-Opener-Policy': 'unsafe-none',
          'Cross-Origin-Embedder-Policy': 'unsafe-non',
          'Cross-Origin-Resource-Policy': 'cross-origin'
        });
    return next.handle();
  }
}
