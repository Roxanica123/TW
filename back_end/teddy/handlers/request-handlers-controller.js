"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHandlerController = void 0;
var request_handler_1 = require("./request-handler");
var url_1 = require("url");
var RequestHandlerController = /** @class */ (function () {
    function RequestHandlerController(aggregatedMetadata) {
        this.aggregatedMetadata = aggregatedMetadata;
    }
    RequestHandlerController.prototype.getRequestHandler = function (request) {
        var path = url_1.parse(request.url ? request.url : "").pathname;
        var httpMethod = request.method;
        return this.aggregatedMetadata.map(function (aggregatedMetadata) {
            var method = aggregatedMetadata.methods
                .find(function (method) { return ((aggregatedMetadata.controller.route + method.route) === path) && method.httpMethod === httpMethod; });
            return method === undefined ? method : new request_handler_1.RequestHandler(aggregatedMetadata.controller.constructorFunction, method.methodName);
        }).find(function (result) { return result !== undefined; });
    };
    return RequestHandlerController;
}());
exports.RequestHandlerController = RequestHandlerController;
