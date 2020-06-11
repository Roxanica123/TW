"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ok = void 0;
var http_action_result_1 = require("./http-action-result");
var Ok = /** @class */ (function () {
    function Ok(body) {
        if (body === void 0) { body = http_action_result_1.EmptyBody; }
        this.body = body;
        this.statusCode = 200;
    }
    return Ok;
}());
exports.Ok = Ok;
