import { IChartRepository } from "../../../domain/repositories/IChartRepository";
import { Connection } from "../..";
import { IChartDataRow } from "../../../domain/entities";

export class PointOfInterestChartRepository implements IChartRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = new Connection();
    }

    public async getChartData(filterQuery: string, limit: number): Promise<IChartDataRow[]> {
        const query: string = `select *, Count('^') as count from\
                                    (select if(CONVERT(point_of_interest USING utf8mb4) ='', 'None', point_of_interest) as pointOfInterest 
                                     from converted_points_of_interest c inner join accidents on c.id=accidents.id ${filterQuery} 
                                        order by accidents.start_time DESC limit ${limit}) as points
                               group by 1 order by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
}