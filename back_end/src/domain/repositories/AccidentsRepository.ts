import { IAccidentsRepository } from "./IAccidentsRepository";
import { IHeatMapCoordinates, IBubbleChartPoint, ITableRowData, IChartDataRow } from "../entities";
import { Connection } from "../../persistence";
import { IEvolutionDate } from "../entities/IEvolutionDate";

export class AccidentsRepository implements IAccidentsRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = new Connection();
    }

    async getEvolutionDate(filterQuery: string): Promise<IEvolutionDate[]> {
        const query: string = `SELECT YEAR(start_time) AS 'year', MONTH(start_time) AS 'month', DAY(start_time) AS 'day', count('^') AS 'number'
        FROM accidents ${filterQuery} GROUP BY YEAR(start_time), MONTH(start_time), DAY(start_time);`;
        const rows: IEvolutionDate[] = await this.connection.execute(query);
        return rows;
    }

    async getAccidentsDaysOfWeekDistribution(filterQuery: string, limit: number): Promise<IChartDataRow[]> {
        const query: string = `SELECT * , COUNT('^') as count from (SELECT DATE_FORMAT(start_time, '%W') as dayOfWeek FROM accidents ${filterQuery} ORDER BY start_time DESC LIMIT ${limit}) days group by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
    async getAccidentsPointsOfInterestDistribution(filterQuery: string, limit: number): Promise<IChartDataRow[]> {
        const query: string = `select *, Count('^') as count from\
                                    (select if(CONVERT(point_of_interest USING utf8mb4) ='', 'None', point_of_interest) as pointOfInterest 
                                     from converted_points_of_interest c inner join accidents on c.id = accidents.id ${filterQuery} order by start_time DESC limit ${limit}) as points
                               group by 1 order by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
    async getAccidentsSeverityDistribution(filterQuery: string, limit: number): Promise<IChartDataRow[]> {
        const query: string = `SELECT *, Count('^') as count FROM (select severity from accidents ${filterQuery} order by start_time DESC limit ${limit}) as severity group by 1 order by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
    async getAccidentsStateDistribution(filterQuery: string, limit: number): Promise<IChartDataRow[]> {
        const query: string = `SELECT * , Count('^') as count FROM (select state from accidents ${filterQuery} order by start_time DESC limit ${limit}) as states group by 1 order by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
    async getAccidentsTimeOfDayDistribution(filterQuery: string, limit: number): Promise<IChartDataRow[]> {
        const query: string = `SELECT * , Count('^') as count FROM
                               (select getTimeOfDay(start_time) as timeOfDay from accidents ${filterQuery} order by start_time DESC limit ${limit}) as timeOfDay group by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
    async getAccidentsWeatherCondition(filterQuery: string, limit: number): Promise<IChartDataRow[]> {
        const query: string = `select * , Count('^') as count from \
                              (select if(weather_condition='', 'No details', weather_condition) as weatherCondition\
                              from accidents ${filterQuery} order by start_time DESC limit ${limit} ) as weather group by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }

    async getAccidentsCoordinates(filterQuery: string, limit: number): Promise<IHeatMapCoordinates[]> {
        const query: string = `SELECT start_lat, start_lng, severity FROM accidents ${filterQuery} ORDER BY start_time DESC LIMIT ` + limit;
        const coordinates: IHeatMapCoordinates[] = await this.connection.execute(query);
        return coordinates;
    }
    async getAccidentsLocationInfo(filterQuery: string, limit: number): Promise<IBubbleChartPoint[]> {
        const query: string = `SELECT id, start_lat, start_lng, state, severity FROM accidents ${filterQuery} ORDER BY start_time DESC LIMIT ` + limit;
        const points: IBubbleChartPoint[] = await this.connection.execute(query);
        return points;
    }
    async getAccidentsDetails(filterQuery: string, page: number, limit: number): Promise<ITableRowData[]> {
        const query: string = `select accidents.id as "id", date_format(accidents.start_time, "%d/%m/%Y") as "date", date_format(accidents.start_time, "%T") as "time",\
        accidents.timezone as "timezone", accidents.severity as "severity", accidents.state as "state" ,\
        concat_ws(', ', accidents.start_lng , accidents.start_lat,  accidents.number,  accidents.street, accidents.city, accidents.state, accidents.zipcode ) as "exact_location", description as "description", \
        (select if(CONVERT(point_of_interest USING utf8mb4)='', "None", point_of_interest) from converted_points_of_interest c where accidents.id=c.id) as "point_of_interest",\
        if(weather_condition="", "No information", weather_condition) as "weather_condition",\
        concat('Temperature: ',temperature,', Pressure: ',pressure,', Humidity: ',humidity,', Wind speed: ',wind_speed) as "weather_details",\
        tmc as "traffic_message_canal", source as "source"\
        from accidents ${filterQuery} order by start_time desc limit ${page * limit}, ${limit};`;
        const info: ITableRowData[] = await this.connection.execute(query);
        return info;
    }


}