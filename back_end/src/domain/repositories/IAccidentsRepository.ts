import { IHeatMapCoordinates, IBubbleChartPoint, ITableRowData, IChartDataRow, IAccident } from "../entities";
import { IEvolutionDate } from "../entities/IEvolutionDate";

export interface IAccidentsRepository {

    getAll(): Promise<Array<IAccident> | null>;
    removeById (id: number):  Promise<boolean>;
    findById(id: number): Promise<IAccident | null>;
    insertAccident( id: number, source?: string, tmc?: number, severity?: number, start_time?: Date, end_time?: Date, start_latitude?: number, start_longitude?: number, end_latitude?: number, end_longitude?: number, distance?: number, description?: string, number?: number, street?: string, side?: string, city?: string, county?: string, state?: string, zipcode?: string, country?: string, timezone?: string, airport_code?: string, weather_timestamp?: string, temperature?: number, wind_chill?: number, humidity?: number, pressure?: number, visibility?: number, wind_direction?: string, wind_speed?: number, precipitation?: number, weather_condition?: number, amenity?: boolean, bump?: boolean, crossing?: boolean, give_way?: boolean, junction?: boolean, no_exit?: boolean, railway?: boolean, roundabout?: boolean, station?: boolean, stop?: boolean, traffic_calming?: boolean, traffic_signal?: boolean, turning_loop?: boolean, sunrise_sunset?: boolean, civil_twilight?: boolean, nautical_twilight?: boolean, astronomical_twilight?: boolean): Promise<IAccident | null>;
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