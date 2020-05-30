import { IChartRepository } from "./IChartRepository";
import { Connection } from "../../../persistence";
import { IChartDataRow } from "../../entities";

export class DayOfWeekChartRepository implements IChartRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = new Connection();
    }

    public async getChartData(limit: number): Promise<IChartDataRow[]> {
        const query: string = `SELECT * , COUNT('^') as count from (SELECT DATE_FORMAT(start_time, '%W') as dayOfWeek\
                               FROM accidents ORDER BY start_time DESC LIMIT ${limit}) days group by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
}