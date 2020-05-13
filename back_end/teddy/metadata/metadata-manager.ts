import { ControllerMetadata } from "./controller-metadata"
import { MethodMetadata } from "./method-metadata"
import { AggregatedMetadata } from "./aggregated-metadata";

export class MetadataManager {
    public static readonly controllers: ControllerMetadata[] = [];
    public static readonly methods: MethodMetadata[] = [];

    public static addMethod(method: MethodMetadata): void {
        MetadataManager.methods.push(method);
    }
    
    public static addController(controller: ControllerMetadata): void {
        MetadataManager.controllers.push(controller);
    }

    public static aggregateMetadata(): AggregatedMetadata[] {
        return this.controllers.map((controller: ControllerMetadata) => {
            
            const methods: MethodMetadata[] = this.methods.filter(method => method.controllerName === controller.name);
            return new AggregatedMetadata(controller, methods);
        });
    }
}