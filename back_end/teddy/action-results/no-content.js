"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoContent = void 0;
var http_action_result_1 = require("./http-action-result");
var NoContent = /** @class */ (function () {
    function NoContent() {
        this.statusCode = 204;
        this.body = http_action_result_1.EmptyBody;
    }
    return NoContent;
}());
exports.NoContent = NoContent;
