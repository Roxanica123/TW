import * as http from "http";
import { HttpActionResult } from "./action-results";
import { Handler } from "./handlers";

export class Server {
    public static async handle(req: http.IncomingMessage, res: http.ServerResponse): Promise<void> {
        const response: HttpActionResult = await Handler.getInstance().handleRequest(req);
        res.statusCode = response.statusCode;
        res.end(response.body);
    }
}