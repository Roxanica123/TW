import csv from "csv-parse";
import * as fs from "fs";
import { createTableQuery, insertRowQuery, createAccidentsLocationTable, insertIntoAccidentsLocation } from "./queries";

export class Database {

    static async init(connection: any, path: string, tableName: string) {
        await this.populateAccidentsTable(connection, path, tableName);
        this.populateAccidentsLocationTable(connection, tableName);
    }
    public static async populateAccidentsTable(connection: any, path: string, tableName: string) {

        const result: any = await connection.execute("SELECT Count(1) FROM information_schema.tables where table_name=?", [tableName])

        if (result !== undefined && (result[0]["Count(1)"] !== 0)) {
            //connection.execute("DROP TABLE ??", [name]);
            console.log("Table exists, all good!");
        }
        else {
            await this.createTable(connection, tableName);

            fs.createReadStream(path)
                .pipe(csv({ from_line: 2 }, () => { }))
                .on('data', (data) => {
                    this.insertRow(connection, data, tableName);
                })
                .on('end', () => {
                    console.log("All good!");
                });
        }
    }
    public static async populateAccidentsLocationTable(connection: any, tableName: string) {
        await connection.execute(createAccidentsLocationTable, []);
        connection.execute(insertIntoAccidentsLocation, [tableName]);

    }
    public static insertRow(connection: any, data: any[], tableName: string) {
        data[0] = tableName;
        connection.execute(insertRowQuery, data);
    }
    public static async createTable(connection: any, name: string) {

        await connection.execute(createTableQuery, [name]);
        console.log("Table created");
    }
}
