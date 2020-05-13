export class MethodMetadata {
    public route: string;
    public controllerName: string;
    public methodName: string;
    public httpMethod: string;

    constructor(route: string, controllerName: string, methodName: string, httpMethod: string) {
        this.route = route;
        this.controllerName = controllerName;
        this.methodName = methodName;
        this.httpMethod = httpMethod;
    }
}