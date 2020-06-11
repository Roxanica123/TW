"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataManager = void 0;
var aggregated_metadata_1 = require("./aggregated-metadata");
var MetadataManager = /** @class */ (function () {
    function MetadataManager() {
    }
    MetadataManager.addMethod = function (method) {
        MetadataManager.methods.push(method);
    };
    MetadataManager.addController = function (controller) {
        MetadataManager.controllers.push(controller);
    };
    MetadataManager.aggregateMetadata = function () {
        var _this = this;
        return this.controllers.map(function (controller) {
            var methods = _this.methods.filter(function (method) { return method.controllerName === controller.name; });
            return new aggregated_metadata_1.AggregatedMetadata(controller, methods);
        });
    };
    MetadataManager.controllers = [];
    MetadataManager.methods = [];
    return MetadataManager;
}());
exports.MetadataManager = MetadataManager;
