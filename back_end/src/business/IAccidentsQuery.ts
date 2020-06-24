export interface IAccidentsFilterQuery {
    point_of_interest?: string;
    start_date?: Date;
    end_date?: Date;
    state?: string;
    severity?: number;
    weather_condition?: string;
    multiselect?: JSON;
}
export interface IAccidentsQuery extends IAccidentsFilterQuery {
    limit: number;
    page: number;
    pageLimit: number;
}

export const AccidentsQueryKeys: (keyof IAccidentsFilterQuery)[] = ["point_of_interest", "start_date", "end_date", "state", "severity", "weather_condition", "multiselect"];