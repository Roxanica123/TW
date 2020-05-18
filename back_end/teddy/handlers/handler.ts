import { RequestHandlerController } from "./request-handlers-controller"
import { MetadataManager } from "../metadata";
import { IncomingMessage } from "http";
import { HttpActionResult, BadRequest } from "../action-results";
import { RequestHandler } from "./request-handler";

export class Handler {
    private static handlerInstance: Handler;
    private readonly requestHandlersController: RequestHandlerController;

    private constructor() {
        this.requestHandlersController = new RequestHandlerController(MetadataManager.aggregateMetadata());
    }

    public static init() {
        this.handlerInstance = new Handler();
    }

    public static getInstance() {
        return this.handlerInstance;
    }

    public handleRequest(request: IncomingMessage): HttpActionResult {
        const requestHandler: RequestHandler | undefined = this.requestHandlersController.getRequestHandler(request);
        if (requestHandler === undefined)
            return new BadRequest("You stupid");
        return requestHandler.execute(request);
    }

}