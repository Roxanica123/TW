"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeddyConnection = void 0;
var mysql = require('mysql2');
var TeddyConnection = /** @class */ (function () {
    function TeddyConnection(options) {
        this.pool = mysql.createPool(options).promise();
    }
    TeddyConnection.init = function (options) {
        this.teddyConnectionInstance = new TeddyConnection(options);
    };
    TeddyConnection.getInstance = function () {
        return this.teddyConnectionInstance;
    };
    TeddyConnection.prototype.getConnectionPool = function () {
        return this.pool;
    };
    return TeddyConnection;
}());
exports.TeddyConnection = TeddyConnection;
