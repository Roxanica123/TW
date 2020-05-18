import { DatabaseOptions } from "./database-options";
const mysql: any = require('mysql2');

export class TeddyConnection {

    protected readonly pool: any;
    private static teddyConnectionInstance: TeddyConnection;

    constructor(options: DatabaseOptions) {
        this.pool = mysql.createPool(options).promise();
    }

    public static init(options: DatabaseOptions) {
        this.teddyConnectionInstance = new TeddyConnection(options);
    }

    public static getInstance() {
        return this.teddyConnectionInstance;
    }

    public getConnectionPool(){
        return this.pool;
    }
}
