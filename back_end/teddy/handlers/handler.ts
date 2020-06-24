import { RequestHandlerController } from "./request-handlers-controller"
import { MetadataManager } from "../metadata";
import { IncomingMessage } from "http";
import { HttpActionResult, BadRequest, Unauthorized } from "../action-results";
import { RequestHandler } from "./request-handler";

export class Handler {
    private static handlerInstance: Handler;
    private readonly authenticationFunction: Function;
    private readonly requestHandlersController: RequestHandlerController;

    private constructor(authenticationFunction: Function) {
        this.requestHandlersController = new RequestHandlerController(MetadataManager.aggregateMetadata());
        this.authenticationFunction = authenticationFunction;
    }

    public static init(authenticationFunction: Function) {
        this.handlerInstance = new Handler(authenticationFunction);
    }

    public static getInstance() {
        return this.handlerInstance;
    }

    public async handleRequest(request: IncomingMessage): Promise<HttpActionResult> {
        const requestHandler: RequestHandler | undefined = this.requestHandlersController.getRequestHandler(request);
        if (requestHandler === undefined)
            return new BadRequest("You stupid");
        if (requestHandler.isAuthRequired()) {
            const authHeader = request.headers['authorization'];
            const token = authHeader?.split(" ")[1];
            if (token === null || await this.authenticationFunction(token) === false) {
                return new Unauthorized(JSON.stringify({ 'response': 'You must be authorized' }));
            }
        }
        return await requestHandler.execute(request);
    }

}