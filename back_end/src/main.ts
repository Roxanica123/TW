import { start } from "../teddy/server-start";
import { AccidentsController } from "./presentation/AccidentsController";
import { AuthController } from "./presentation/AuthController";

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
