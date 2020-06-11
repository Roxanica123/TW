"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_start_1 = require("../teddy/server-start");
var AccidentsController_1 = require("./presentation/AccidentsController");
var AuthController_1 = require("./presentation/AuthController");
server_start_1.start({
    controllers: [
        AccidentsController_1.AccidentsController,
        AuthController_1.AuthController
    ],
    databaseOptions: {
        host: 'localhost',
        user: 'dba',
        password: 'sql',
        database: 'tw',
        waitForConnections: true,
        connectionLimit: 150,
        queueLimit: 0
    }
});
