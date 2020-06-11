"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerMetadata = void 0;
var ControllerMetadata = /** @class */ (function () {
    function ControllerMetadata(route, name, constructorFunction) {
        this.name = name;
        this.route = route;
        this.constructorFunction = constructorFunction;
    }
    return ControllerMetadata;
}());
exports.ControllerMetadata = ControllerMetadata;
