"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var metadata_1 = require("../metadata");
function Controller(path_prefix) {
    return function (target) {
        metadata_1.MetadataManager.addController(new metadata_1.ControllerMetadata(path_prefix, target.name, target.prototype.constructor));
    };
}
exports.Controller = Controller;
