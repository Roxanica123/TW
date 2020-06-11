"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpDelete = void 0;
var metadata_1 = require("../metadata");
var http_methods_1 = require("./http-methods");
function HttpDelete(path) {
    if (path === void 0) { path = ""; }
    return function (target, propertyKey) {
        metadata_1.MetadataManager.addMethod(new metadata_1.MethodMetadata(path, target.constructor.name, propertyKey, http_methods_1.HTTP_DELETE));
    };
}
exports.HttpDelete = HttpDelete;
