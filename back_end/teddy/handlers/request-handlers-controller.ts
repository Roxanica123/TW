import { AggregatedMetadata, MethodMetadata } from "../metadata/index"
import { RequestHandler } from "./request-handler"
import { IncomingMessage } from "http";
import { parse } from "url";

export class RequestHandlerController {
    private readonly aggregatedMetadata: AggregatedMetadata[];
    constructor(aggregatedMetadata: AggregatedMetadata[]) {
        this.aggregatedMetadata = aggregatedMetadata;
    }

    public getRequestHandler(request: IncomingMessage): RequestHandler | undefined {
        const path: string | null = parse(request.url ? request.url : "").pathname;
        const httpMethod: string | undefined = request.method;

        return this.aggregatedMetadata.map((aggregatedMetadata: AggregatedMetadata) => {
            const method: MethodMetadata | undefined = aggregatedMetadata.methods
                .find(method => ((aggregatedMetadata.controller.route + method.route) === path) && method.httpMethod === httpMethod);

            return method === undefined ? method : new RequestHandler(aggregatedMetadata.controller.constructorFunction, method.methodName, method.requiresAuth);
        }).find(result => result !== undefined);
    }
}