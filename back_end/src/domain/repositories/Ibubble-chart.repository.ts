import { IBubbleChartPoint } from "../entities/IBubbleChartPoint";

export interface IBubbleChartRepository {
    getLatestAccidentsLocationInfo(limit: number): Promise<IBubbleChartPoint[]>;
}