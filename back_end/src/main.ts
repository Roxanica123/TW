import { start } from "../teddy/server-start";
import { AccidentsController, AuthController } from "./presentation";
import { authenticate } from "./business/auth/Authenticate";


start({
    controllers: [
        AccidentsController,
        AuthController
    ],
    databaseOptions: {
        host: 'localhost',
        user: 'dba',
        password: 'sql',
        database: 'tw',
        waitForConnections: true,
        connectionLimit: 150,
        queueLimit: 0
    },
    authFunction: authenticate
});
