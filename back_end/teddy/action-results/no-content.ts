import { HttpActionResult, EmptyBody } from "./http-action-result";

export class NoContent implements HttpActionResult {
    public readonly statusCode: number;
    public readonly body: string;
    constructor() {
        this.statusCode = 204;
        this.body = EmptyBody;
    }
}