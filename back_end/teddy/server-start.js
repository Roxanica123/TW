"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = void 0;
var http = __importStar(require("http"));
var _1 = require(".");
var handlers_1 = require("./handlers");
var teddy_connection_1 = require("./db/teddy-connection");
var database_1 = require("../src/persistence/table-creation/database");
var persistence_1 = require("../src/persistence");
function start(app) {
    handlers_1.Handler.init();
    teddy_connection_1.TeddyConnection.init(app.databaseOptions);
    database_1.Database.init(new persistence_1.Connection(), '...', 'accidents');
    var server = http.createServer(function (req, res) {
        _1.Server.handle(req, res);
    });
    server.listen(5000, "127.0.0.1");
}
exports.start = start;
