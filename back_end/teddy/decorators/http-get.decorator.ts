import { MethodMetadata, MetadataManager } from "../metadata";
import { HTTP_GET } from "./http-methods";

export function HttpGet(path: string = "", requiresAuth: boolean = false): Function {
    return function (target: Function, propertyKey: string) {
        MetadataManager.addMethod(new MethodMetadata(path, target.constructor.name, propertyKey, HTTP_GET, requiresAuth));
    }
}

