export interface ITableRowData {
    id: string;
    date: string;
    time: string;
    timezone: string;
    severity: string;
    state: string;
    exact_location: string;
    description: string;
    point_of_interest: string;
    weather_condition: string;
    weather_details: string;
    traffic_message_canal: string;
    source: string;
}
export const TableRowHeaderKeys: (keyof ITableRowData)[] = ["id", "date", "time", "timezone", "severity", "state"];
export const TableRowExpandKeys: (keyof ITableRowData)[] = ["exact_location", "description", "point_of_interest", "weather_condition",
    "weather_details", "traffic_message_canal", "source"];