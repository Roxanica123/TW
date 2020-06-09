import { AccidentsQueryKeys, IAccidentsFilterQuery } from "./IAccidentsQuery";

export class QueryBuilder {
    private point_of_interest?: string;
    private start_date?: string = new Date("2000-01-01").toISOString().slice(0, 19).replace('T', " ");
    private end_date?: string = new Date().toISOString().slice(0, 19).replace('T', " ");
    private state?: string;
    private severity?: number;
    private weather_condition?: any;
    constructor(query: IAccidentsFilterQuery) {
        if (query === undefined) return;
        AccidentsQueryKeys.forEach(key => {
            if (query[key] !== undefined)
                this[key] = query[key];
        });
    }
    public build(): string {
        let query: string = ` WHERE accidents.start_time BETWEEN '${this.start_date}' AND '${this.end_date}' `;
        if (this.point_of_interest !== undefined) {
            query += ` AND (select if(CONVERT(point_of_interest USING utf8mb4)='', "None", CONVERT(point_of_interest USING utf8mb4)) \
                        from converted_points_of_interest poi where poi.id= accidents.id) = '${this.point_of_interest}' `
        }
        if (this.state !== undefined) {
            query += ` AND accidents.state= '${this.state}' `;
        }
        if (this.severity !== undefined) {
            query += ` AND accidents.severity= ${this.severity} `;
        }
        if (this.weather_condition !== undefined) {
            query += ` AND accidents.weather_condition= '${this.weather_condition}' `;
        }
        return query;
    }
}

