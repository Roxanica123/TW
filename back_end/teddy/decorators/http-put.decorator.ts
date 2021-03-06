import { MethodMetadata, MetadataManager } from "../metadata";
import { HTTP_PUT } from "./http-methods";

export function HttpPut(path: string = "", requiresAuth: boolean = false): Function {
    return function (target: Function, propertyKey: string) {
        MetadataManager.addMethod(new MethodMetadata(path, target.constructor.name, propertyKey, HTTP_PUT, requiresAuth));
    }
}

