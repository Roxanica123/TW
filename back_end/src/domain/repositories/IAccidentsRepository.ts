import { IHeatMapCoordinates, IBubbleChartPoint, ITableRowData, IChartDataRow } from "../entities";

export interface IAccidentsRepository {

    getAccidentsCoordinates(limit: number): Promise<IHeatMapCoordinates[]>;
    getAccidentsLocationInfo(limit: number): Promise<IBubbleChartPoint[]>;
    getAccidentsDetails(page: number, limit: number): Promise<ITableRowData[]>;
    getAccidentsDaysOfWeekDistribution(limit: number): Promise<IChartDataRow[]>;
    getAccidentsPointsOfInterestDistribution(limit: number): Promise<IChartDataRow[]>;
    getAccidentsSeverityDistribution(limit: number): Promise<IChartDataRow[]>;
    getAccidentsStateDistribution(limit: number): Promise<IChartDataRow[]>;
    getAccidentsTimeOfDayDistribution(limit: number): Promise<IChartDataRow[]>;
    getAccidentsWeatherCondition(limit: number): Promise<IChartDataRow[]>;
}