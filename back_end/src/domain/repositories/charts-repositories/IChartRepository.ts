import { IChartDataRow } from "../../entities";

export interface IChartRepository {
    getChartData(filterQuery: string, limit: number): Promise<IChartDataRow[]>;
}