import { IChartRepository } from "./IChartRepository";
import { Connection } from "../../../persistence";
import { IChartDataRow } from "../../entities";

export class WeatherConditionChartRepository implements IChartRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = new Connection();
    }

    public async getChartData(filterQuery: string, limit: number): Promise<IChartDataRow[]> {
        const query: string = `select * , Count('^') as count from \
                              (select if(weather_condition='', 'No details', weather_condition) as weatherCondition\
                              from accidents ${filterQuery} order by start_time DESC limit ${limit} ) as weather group by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
}