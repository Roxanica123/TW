
import { Connection } from "../../persistence";
import { IAccidentsRepository } from "../../domain/repositories";
import { IAccident, IEvolutionDate,IHeatMapCoordinates, IBubbleChartPoint, ITableRowData } from "../../domain/entities";


export class AccidentsRepository implements IAccidentsRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = new Connection();
    }

    
    async getAll(): Promise<Array<IAccident> | null> {
        const query: string = `select * from accidents`;
        const user: IAccident[] = await this.connection.execute(query);
        if (user.length === 0)
            return null;
        return user;
    }

    async removeById (id: number):  Promise<boolean>  {

        try {
            const query: string = ` delete from users where id = '${id}' `;
            await this.connection.execute(query);
        }
        catch {
            return false;
        }
        return true;
    }
    async findById(id: number): Promise<IAccident | null> {
        const query: string = ` select username, password, email from users where  username = '${id}' `;
        const accident: IAccident[] = await this.connection.execute(query);
        if (accident.length === 0)
            return null;
        return accident[0];
    }

    async insertAccident( id: number, source?: string, tmc?: number, severity?: number, start_time?: Date, end_time?: Date, start_latitude?: number, start_longitude?: number, end_latitude?: number, end_longitude?: number, distance?: number, description?: string, number?: number, street?: string, side?: string, city?: string, county?: string, state?: string, zipcode?: string, country?: string, timezone?: string, airport_code?: string, weather_timestamp?: string, temperature?: number, wind_chill?: number, humidity?: number, pressure?: number, visibility?: number, wind_direction?: string, wind_speed?: number, precipitation?: number, weather_condition?: number, amenity?: boolean, bump?: boolean, crossing?: boolean, give_way?: boolean, junction?: boolean, no_exit?: boolean, railway?: boolean, roundabout?: boolean, station?: boolean, stop?: boolean, traffic_calming?: boolean, traffic_signal?: boolean, turning_loop?: boolean, sunrise_sunset?: boolean, civil_twilight?: boolean, nautical_twilight?: boolean, astronomical_twilight?: boolean): Promise<IAccident | null> {
        const existentAccidnet: IAccident | null = await this.findById(id);
        if (existentAccidnet !== null)
            return null;
        const query: string = ` insert into users ( id, source, tmc, severity, start_time, end_time?, start_latitude, start_longitude, end_latitude, end_longitude, distance, description, number, street, side, city?, county, state, zipcode, country, timezone, airport_code, weather_timestamp, temperature, wind_chill, humidity, pressure, visibility, wind_direction, wind_speed, precipitation, weather_condition, amenity, bump, crossing, give_way, junction, no_exit, railway, roundabout, station, stop, traffic_calming, traffic_signal, turning_loop, sunrise_sunset, civil_twilight, nautical_twilight, astronomical_twilight)
        values ( ${id}, ${source}, ${tmc}, ${severity}, ${start_time}, ${end_time}, ${start_latitude}, ${start_longitude}, ${end_latitude}, ${end_longitude}, ${distance}, ${description}, ${number}, ${street}, ${side}, ${city}, ${county}, ${state}, ${zipcode}, ${country}, ${timezone}, ${airport_code}, ${weather_timestamp}, ${temperature}, ${wind_chill}, ${humidity}, ${pressure}, ${visibility}, ${wind_direction}, ${wind_speed}, ${precipitation}, ${weather_condition}, ${amenity}, ${bump}, ${crossing}, ${give_way}, ${junction}, ${no_exit}, ${railway}, ${roundabout}, ${station}, ${stop}, ${traffic_calming}, ${traffic_signal}, ${turning_loop}, ${sunrise_sunset}, ${civil_twilight}, ${nautical_twilight}, ${astronomical_twilight})
        `;
        await this.connection.execute(query);
        const createdAccidnet = await this.findById(id);
        return createdAccidnet;
    }

    async getEvolutionDate(filterQuery: string): Promise<IEvolutionDate[]> {
        const query: string = `SELECT YEAR(start_time) AS 'year', MONTH(start_time) AS 'month', DAY(start_time) AS 'day', count('^') AS 'number'
        FROM accidents ${filterQuery} GROUP BY YEAR(start_time), MONTH(start_time), DAY(start_time);`;
        const rows: IEvolutionDate[] = await this.connection.execute(query);
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