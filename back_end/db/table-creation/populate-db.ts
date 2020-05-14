import csv from "csv-parse";
import * as fs from "fs";
import { Connection } from "../connection";
import { createTableQuery, insertRowQuery } from "./queries";

class DatabasePopulation {
    static async populateAccidentsTable(path: string, tableName: string, createTableQuery: string, insertRowQuery: string) {
        await this.createTable(tableName, createTableQuery);
        
        fs.createReadStream(path)
            .pipe(csv({ from_line: 2 }, () => { }))
            .on('data', (data) => {
                this.insertRow(data, tableName, insertRowQuery);
            })
            .on('end', () => {
                console.log("All good!");
            });
    }

    static insertRow(data: any[], tableName: string, insertRowQuery: string) {
        data[0] = tableName;
        Connection.execute(insertRowQuery, data);
    }
    static async createTable(name: string, createTableQuery: string) {
        const result: any = await Connection.execute("SELECT Count(1) FROM information_schema.tables where table_name=?", [name])

        if (result !== undefined && (result[0]["Count(1)"] !== 0)) {
            Connection.execute("DROP TABLE ??", [name]);
            console.log("Table dropped");
        }

        await Connection.execute(createTableQuery, [name]);
        console.log("Table created");
    }
}


DatabasePopulation.populateAccidentsTable("../../date/date.csv", "accidents", createTableQuery, insertRowQuery);