import { DatabaseOptions } from "./db/database-options";

export interface Application {
    controllers: Array<Function>;
    databaseOptions: DatabaseOptions;
    authFunction: Function;
}