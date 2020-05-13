import { MethodMetadata, MetadataManager } from "../metadata";
import { HTTP_POST } from "./http-methods";

export function HttpPost(path: string = ""): Function {
    return function (target: Function, propertyKey: string) {
        MetadataManager.addMethod(new MethodMetadata(path, target.constructor.name, propertyKey, HTTP_POST));
    }
}

