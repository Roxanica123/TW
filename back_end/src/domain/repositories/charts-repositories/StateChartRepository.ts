import { IChartRepository } from "./IChartRepository";
import { Connection } from "../../../persistence";
import { IChartDataRow } from "../../entities";

export class StateChartRepository implements IChartRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = new Connection();
    }

    public async getChartData(limit: number): Promise<IChartDataRow[]> {
        const query: string = `SELECT * , Count('^') as count FROM
                               (select state from accidents order by start_time DESC limit ${limit}) as states group by 1 order by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
}