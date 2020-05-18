import { TeddyConnection } from "../../teddy/db/teddy-connection";

export class Connection {
    private readonly pool: any;

    constructor() {
        this.pool = TeddyConnection.getInstance().getConnectionPool();
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