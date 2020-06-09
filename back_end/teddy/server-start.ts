import { Application } from "./application";
import * as  http from "http";
import { Server } from '.';
import { Handler } from "./handlers";
import { TeddyConnection } from "./db/teddy-connection";
import { Database } from "../src/persistence/table-creation/database";
import { Connection } from "../src/persistence";


export function start(app: Application): void {
    
    Handler.init();
    TeddyConnection.init(app.databaseOptions);
    Database.init(new Connection(), '...', 'accidents');
    const server: http.Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
        Server.handle(req, res);
    });
    server.listen(5000, "127.0.0.1");
}