import { IBubbleChartPoint } from "../entities/Ibubble-chart-point";

export interface IBubbleChartRepository {
    getLatestAccidentsLocationInfo(limit: number): Promise<IBubbleChartPoint[]>;
}