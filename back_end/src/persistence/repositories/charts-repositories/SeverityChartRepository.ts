import { IChartRepository } from "../../../domain/repositories/IChartRepository";
import { Connection } from "../..";
import { IChartDataRow } from "../../../domain/entities";

export class SeverityChartRepository implements IChartRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = new Connection();
    }

    public async getChartData(filterQuery: string, limit: number): Promise<IChartDataRow[]> {
        const query: string = `SELECT CAST(severity AS CHAR), Count('^') as count FROM
                               (select severity from accidents ${filterQuery} order by start_time DESC limit ${limit}) as severity group by 1 order by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
}