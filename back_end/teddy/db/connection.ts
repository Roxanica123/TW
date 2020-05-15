import { DatabaseOptions } from "./database-options";
import { Database } from "./table-creation/database"
const mysql: any = require('mysql2');

export class Connection {

    private pool: any;

    constructor(options: DatabaseOptions) {
        this.pool = mysql.createPool(options).promise();
    }
    public async init() {
        Database.populateAccidentsTable(this, "../../date/date.csv", "accidents"); //------
    }
    public async execute<T>(queryString: string, params: any[]): Promise<T[]> {
        try {
            const [rows] = await this.pool.query(queryString, params);
            return rows;
        }
        catch (e) {
            console.log(e);
            return [];
        };
    }
}
