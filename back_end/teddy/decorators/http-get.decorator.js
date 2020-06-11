"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpGet = void 0;
var metadata_1 = require("../metadata");
var http_methods_1 = require("./http-methods");
function HttpGet(path) {
    if (path === void 0) { path = ""; }
    return function (target, propertyKey) {
        metadata_1.MetadataManager.addMethod(new metadata_1.MethodMetadata(path, target.constructor.name, propertyKey, http_methods_1.HTTP_GET));
    };
}
exports.HttpGet = HttpGet;
