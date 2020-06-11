import { start } from "../teddy/server-start";
import { AccidentsController, AuthController } from "./presentation";


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
    }
});
