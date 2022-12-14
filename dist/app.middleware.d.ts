/// <reference types="node" />
import { NestMiddleware } from '@nestjs/common';
import { ServerResponse, IncomingMessage } from 'http';
export declare class AppMiddleware implements NestMiddleware {
    use(req: IncomingMessage, res: ServerResponse, next: Function): void;
}
