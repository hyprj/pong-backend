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
    return next.handle().pipe(
      map((result) => {
        const res = context.switchToHttp().getResponse();
        [
          {'content-type': 'application/json'}, 
          {'cross-origin-opener-policy': 'unsafe-none'},
          {'Cross-Origin-Embedder-Policy': 'unsafe-non'},
          {'Cross-Origin-Resource-Policy': 'cross-origin'}
        ].forEach(header => res.set(header));
        res.json(result);
        return;
      })
    );
    
    
  }
}
