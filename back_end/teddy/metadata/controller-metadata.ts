export class ControllerMetadata {
    public route: string;
    public name: string;
    public constructorFunction: Function;

    constructor(route: string, name: string, constructorFunction: Function) {
        this.name = name;
        this.route = route;
        this.constructorFunction = constructorFunction;
    }
}