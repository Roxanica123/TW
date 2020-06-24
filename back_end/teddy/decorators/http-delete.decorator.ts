import { MethodMetadata, MetadataManager } from "../metadata";
import { HTTP_DELETE } from "./http-methods";

export function HttpDelete(path: string = "", requiresAuth: boolean = false): Function {
    return function (target: Function, propertyKey: string) {
        MetadataManager.addMethod(new MethodMetadata(path, target.constructor.name, propertyKey, HTTP_DELETE, requiresAuth));
    }
}
