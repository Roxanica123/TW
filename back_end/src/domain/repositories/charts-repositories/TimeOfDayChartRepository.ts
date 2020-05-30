import { IChartRepository } from "./IChartRepository";
import { Connection } from "../../../persistence";
import { IChartDataRow } from "../../entities";

export class TimeOfDayChartRepository implements IChartRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = new Connection();
    }

    public async getChartData(limit: number): Promise<IChartDataRow[]> {
        const query: string = `SELECT * , Count('^') as count FROM
                               (select getTimeOfDay(start_time) as timeOfDay from accidents order by start_time DESC limit ${limit}) as timeOfDay group by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
}