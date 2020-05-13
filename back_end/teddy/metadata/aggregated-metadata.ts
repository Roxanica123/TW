import { ControllerMetadata } from "./controller-metadata";
import { MethodMetadata } from "./method-metadata";


export class AggregatedMetadata {
    public controller: ControllerMetadata;
    public methods: MethodMetadata[];

    constructor(controller: ControllerMetadata, methods: MethodMetadata[]) {
        this.controller = controller
        this.methods = methods;
    }
}