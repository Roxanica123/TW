import * as http from "http";
import { HttpActionResult } from "./action-results";
import { Handler } from "./handlers";

export class Server {
    public static handle(req: http.IncomingMessage, res: http.ServerResponse): void {
        const response: HttpActionResult = Handler.getInstance().handleRequest(req);
        res.statusCode = response.statusCode;
        res.end(response.body);
    }
}