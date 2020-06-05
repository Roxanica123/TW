import { ITableRepository } from "./ITableRepository";
import { Connection } from "../../persistence";
import { ITableRowData } from "../entities/ITableRowData";

export class TableRepository implements ITableRepository {
    private readonly connection: Connection;

    constructor() {
        this.connection = new Connection();
    }
    async getAccidentsDetailsTable(page: number, limit: number): Promise<ITableRowData[]> {
        const query: string = `select a.id as "id", date_format(a.start_time, "%d/%m/%Y") as "date", date_format(a.start_time, "%T") as "time",\
                                    a.timezone as "timezone", a.severity as "severity", a.state as "state" ,\
                                    concat_ws(', ', a.start_lng , a.start_lat,  a.number,  a.street, a.city, a.state, a.zipcode ) as "exact_Location",\
                                    description as "description", \
                                    (select if(CONVERT(point_of_interest USING utf8mb4)='', "None", point_of_interest) from converted_points_of_interest c where a.id=c.id) as "point_of_interest",\
                                    if(a.weather_condition="", "No information", a.weather_condition) as "weather_condition",\
                                    concat('Temperature: ',a.temperature,', Pressure: ',a.pressure,', Humidity: ',a.humidity,', Wind speed: ',a.wind_speed) as "weather_details",\
                                    a.tmc as "traffic_message_canal",\
                                    a.source as "source"\
                                from accidents a order by a.start_time desc limit ${page * 20}, ${limit};`;
        const info: ITableRowData[] = await this.connection.execute(query);
        return info;
    }

}