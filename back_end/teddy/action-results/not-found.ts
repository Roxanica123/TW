import { HttpActionResult} from "./http-action-result";

export class NotFound implements HttpActionResult {
    public readonly statusCode: number;
    public readonly body: string;
    constructor(body: string) {
        this.statusCode = 404;
        this.body = body;
    }
}