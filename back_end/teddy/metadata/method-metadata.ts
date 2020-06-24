export class MethodMetadata {
    public route: string;
    public controllerName: string;
    public methodName: string;
    public httpMethod: string;
    public requiresAuth: boolean;

    constructor(route: string, controllerName: string, methodName: string, httpMethod: string, requiresAuth: boolean) {
        this.route = route;
        this.controllerName = controllerName;
        this.methodName = methodName;
        this.httpMethod = httpMethod;
        this.requiresAuth = requiresAuth;
    }
}