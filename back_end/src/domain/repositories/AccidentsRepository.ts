import { IAccidentsRepository } from "./IAccidentsRepository";
import { IHeatMapCoordinates, IBubbleChartPoint, ITableRowData, IChartDataRow } from "../entities";
import { Connection } from "../../persistence";

export class AccidentsRepository implements IAccidentsRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = new Connection();
    }

    async getAccidentsDaysOfWeekDistribution(limit: number): Promise<IChartDataRow[]> {
        const query: string = `SELECT * , COUNT('^') as count from (SELECT DATE_FORMAT(start_time, '%W') as dayOfWeek FROM accidents ORDER BY start_time DESC LIMIT ${limit}) days group by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
    async getAccidentsPointsOfInterestDistribution(limit: number): Promise<IChartDataRow[]> {
        const query: string = `select *, Count('^') as count from\
                                    (select if(CONVERT(point_of_interest USING utf8mb4) ='', 'None', point_of_interest) as pointOfInterest 
                                     from converted_points_of_interest order by start_time DESC limit ${limit}) as points
                               group by 1 order by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
    async getAccidentsSeverityDistribution(limit: number): Promise<IChartDataRow[]> {
        const query: string = `SELECT *, Count('^') as count FROM (select severity from accidents order by start_time DESC limit ${limit}) as severity group by 1 order by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
    async getAccidentsStateDistribution(limit: number): Promise<IChartDataRow[]> {
        const query: string = `SELECT * , Count('^') as count FROM (select state from accidents order by start_time DESC limit ${limit}) as states group by 1 order by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
    async getAccidentsTimeOfDayDistribution(limit: number): Promise<IChartDataRow[]> {
        const query: string = `SELECT * , Count('^') as count FROM
                               (select getTimeOfDay(start_time) as timeOfDay from accidents order by start_time DESC limit ${limit}) as timeOfDay group by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }
    async getAccidentsWeatherCondition(limit: number): Promise<IChartDataRow[]> {
        const query: string = `select * , Count('^') as count from \
                              (select if(weather_condition='', 'No details', weather_condition) as weatherCondition\
                              from accidents order by start_time DESC limit ${limit} ) as weather group by 1`;
        const rows: IChartDataRow[] = await this.connection.execute(query);
        return rows;
    }

    async getAccidentsCoordinates(limit: number): Promise<IHeatMapCoordinates[]> {
        const query: string = "SELECT start_lat, start_lng, severity FROM accidents ORDER BY start_time DESC LIMIT " + limit;
        const coordinates: IHeatMapCoordinates[] = await this.connection.execute(query);
        return coordinates;
    }
    async getAccidentsLocationInfo(limit: number): Promise<IBubbleChartPoint[]> {
        const query: string = "SELECT id, start_lat, start_lng, state, severity FROM accidents ORDER BY start_time DESC LIMIT " + limit;
        const points: IBubbleChartPoint[] = await this.connection.execute(query);
        return points;
    }
    async getAccidentsDetails(page: number, limit: number): Promise<ITableRowData[]> {
        const query: string = `select a.id as "id", date_format(a.start_time, "%d/%m/%Y") as "date", date_format(a.start_time, "%T") as "time",\
        a.timezone as "timezone", a.severity as "severity", a.state as "state" ,\
        concat_ws(', ', a.start_lng , a.start_lat,  a.number,  a.street, a.city, a.state, a.zipcode ) as "exact_Location", description as "description", \
        (select if(CONVERT(point_of_interest USING utf8mb4)='', "None", point_of_interest) from converted_points_of_interest c where a.id=c.id) as "point_of_interest",\
        if(a.weather_condition="", "No information", a.weather_condition) as "weather_condition",\
        concat('Temperature: ',a.temperature,', Pressure: ',a.pressure,', Humidity: ',a.humidity,', Wind speed: ',a.wind_speed) as "weather_details",\
        a.tmc as "traffic_message_canal", a.source as "source"\
        from accidents a order by a.start_time desc limit ${page * limit}, ${limit};`;
        const info: ITableRowData[] = await this.connection.execute(query);
        return info;
    }


}