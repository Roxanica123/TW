import { IChartRepository } from "../../../domain/repositories/IChartRepository";
import { Connection } from "../..";
import { IChartDataRow } from "../../../domain/entities";

export class DayOfWeekChartRepository implements IChartRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = new Connection();
    }

    public async getChartData(filterQuery: string, limit: number): Promise<IChartDataRow[]> {
        const query: string = `SELECT * , COUNT('^') as count from (SELECT DATE_FORMAT(start_time, '%W') as dayOfWeek\
                               FROM accidents ${filterQuery} ORDER BY start_time DESC LIMIT ${limit}) days group by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
}