"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequest = void 0;
var BadRequest = /** @class */ (function () {
    function BadRequest(body) {
        this.statusCode = 400;
        this.body = body;
    }
    return BadRequest;
}());
exports.BadRequest = BadRequest;
