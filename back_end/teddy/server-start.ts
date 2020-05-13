import { Application } from "./application";
import * as  http  from "http";
import {Server} from '.';

export function start(_app: Application): void {
    
    const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
        Server.handle(req, res);
    });
    server.listen(5000, "127.0.0.1");
}