import { start } from "../teddy/server-start";
import { AccidentsController } from "./presentation/accidents.controller";

start({
    controllers: [
        AccidentsController
    ]
});