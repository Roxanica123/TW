import { IBubbleChartPoint } from "../entities/IBubbleChartPoint";

export interface IBubbleChartRepository {
    getAccidentsLocationInfo(limit: number): Promise<IBubbleChartPoint[]>;
}