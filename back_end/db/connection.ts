const mysql: any = require('mysql2');

export class Connection {
    private static pool: any = mysql.createPool({
        host: 'localhost',
        user: 'dba',
        password: 'sql',
        database: 'tw',
        waitForConnections: true,
        connectionLimit: 150,
        queueLimit: 0
    }).promise();

    public static async execute(queryString: string, params: any[]): Promise<any[] | undefined> {
        try {
            const [rows, fields] = await Connection.pool.query(queryString, params);
            return [JSON.parse(JSON.stringify(rows)), fields ? JSON.parse(JSON.stringify(fields)) : undefined];
        }
        catch (e) { console.log(e); return undefined; };
    }
}

//Connection.execute("SELECT 1 FROM information_schema.tables where table_name=?", ["accidents"]).then(cv => console.log(cv));
