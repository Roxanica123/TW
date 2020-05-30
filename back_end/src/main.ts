import { start } from "../teddy/server-start";
import { AccidentsController } from "./presentation/AccidentsController";

start({
    controllers: [
        AccidentsController,
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
