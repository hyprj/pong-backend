import { Injectable, NestMiddleware } from '@nestjs/common';
import { ServerResponse, IncomingMessage } from 'http';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  use(req: IncomingMessage, res: ServerResponse, next: Function) {
    res.writeHead(200, {
      'content-type': 'application/json',
      'x-access-token': 1,
      'cross-origin-opener-policy': 'unsafe-none',
      'Cross-Origin-Embedder-Policy': 'unsafe-non',
      'Cross-Origin-Resource-Policy': 'cross-origin',
    });
    res.write(JSON.stringify({ test: 'test' }));
    res.end();
  }
}
