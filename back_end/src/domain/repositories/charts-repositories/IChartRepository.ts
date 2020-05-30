import { IChartDataRow } from "../../entities";

export interface IChartRepository {
    getChartData(limit: number): Promise<IChartDataRow[]>;
}