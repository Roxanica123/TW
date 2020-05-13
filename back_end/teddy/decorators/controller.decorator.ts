import { ControllerMetadata, MetadataManager } from "../metadata";

export function Controller(path_prefix: string): Function {
    return function (target: Function) {
        MetadataManager.addController(new ControllerMetadata(path_prefix, target.name, target.prototype.constructor))
    }
}
