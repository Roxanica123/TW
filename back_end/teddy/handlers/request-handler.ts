import { HttpActionResult, BadRequest } from "../action-results";
import { IncomingMessage } from "http";
import { parse } from "url";

export class RequestHandler {
    private readonly constructorFunction: any;
    private readonly methodName: string;

    constructor(constructorFunction: Function, methodName: string) {
        this.constructorFunction = constructorFunction;
        this.methodName = methodName;
    }


    public async execute(request: IncomingMessage): Promise<HttpActionResult> {
        const controller: any = new this.constructorFunction();
        let bodyString: string = "";
        let body: any = new Promise((resolve) => {
            request.on('data', chunk => { bodyString = bodyString + chunk; });
            request.on('end', () => {
                resolve(JSON.parse(bodyString !== "" ? bodyString : "{}"))
            });
        });
        body = await body;
        const urlParams = parse(request.url ? request.url : "").query?.split('&')
            .map(element => {
                const pair: string[] = element.split('=');
                const key: string | undefined = pair[0] === "" ? undefined : unescape(pair[0]);
                let value: string | undefined = pair[1] === "" ? undefined : unescape(pair[1]);
                try {
                    value = JSON.parse(value ? value : "");
                }
                catch{ }
                return { key, value };
            });

        if (urlParams !== undefined && !urlParams.every(element => element.key !== undefined && element.value !== undefined))
            return new BadRequest("Invalid Query");

        const query: any = urlParams?.reduce((accumulator: any, currentValue: any) => {
            accumulator[currentValue.key] = currentValue.value; return accumulator;
        }, {});
        return await controller[this.methodName].apply(controller, [query, body]);
    }
}