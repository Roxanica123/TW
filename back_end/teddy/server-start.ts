import { Application } from "./application";
import * as  http from "http";
import { Server } from '.';
import { Connection } from "./db/connection";

export function start(app: Application): void {
    const connection: Connection = new Connection(app.databaseOptions);
    connection.init();
    
    const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
        Server.handle(req, res);
    });
    server.listen(5000, "127.0.0.1");
}