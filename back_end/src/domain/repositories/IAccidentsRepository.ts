import { IHeatMapCoordinates, IBubbleChartPoint, ITableRowData, IChartDataRow } from "../entities";
import { IEvolutionDate } from "../entities/IEvolutionDate";

export interface IAccidentsRepository {

    getEvolutionDate(filterQuery: string): Promise<IEvolutionDate[]>;
    getAccidentsCoordinates(filterQuery: string, limit: number): Promise<IHeatMapCoordinates[]>;
    getAccidentsLocationInfo(filterQuery: string, limit: number): Promise<IBubbleChartPoint[]>;
    getAccidentsDetails(filterQuery: string, page: number, limit: number): Promise<ITableRowData[]>;
    getAccidentsDaysOfWeekDistribution(filterQuery: string, limit: number): Promise<IChartDataRow[]>;
    getAccidentsPointsOfInterestDistribution(filterQuery: string, limit: number): Promise<IChartDataRow[]>;
    getAccidentsSeverityDistribution(filterQuery: string, limit: number): Promise<IChartDataRow[]>;
    getAccidentsStateDistribution(filterQuery: string, limit: number): Promise<IChartDataRow[]>;
    getAccidentsTimeOfDayDistribution(filterQuery: string, limit: number): Promise<IChartDataRow[]>;
    getAccidentsWeatherCondition(filterQuery: string, limit: number): Promise<IChartDataRow[]>;
}