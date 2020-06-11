"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodMetadata = void 0;
var MethodMetadata = /** @class */ (function () {
    function MethodMetadata(route, controllerName, methodName, httpMethod) {
        this.route = route;
        this.controllerName = controllerName;
        this.methodName = methodName;
        this.httpMethod = httpMethod;
    }
    return MethodMetadata;
}());
exports.MethodMetadata = MethodMetadata;
