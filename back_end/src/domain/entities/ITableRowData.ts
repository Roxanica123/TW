export class TableRowHeaderData {
    public id: string = "";
    public date: string = "";
    public time: string = "";
    public timezone: string = "";
    public severity: string = "";
    public state: string = "";
}

export class TableRowExpandData {
    public exact_location: string = "";
    public description: string = "";
    public point_of_interest: string = "";
    public weather_condition: string = "";
    public weather_details: string = "";
    public traffic_message_canal: string = "";
    public source: string = "";
}

export type ITableRowData = TableRowExpandData & TableRowHeaderData;
export const TableRowHeaderDataKeys: (keyof TableRowHeaderData)[] = Object.keys(new TableRowHeaderData()).map(key => <keyof TableRowHeaderData>key);
export const TableRowExpandDataKeys: (keyof TableRowExpandData)[] = Object.keys(new TableRowExpandData()).map(key => <keyof TableRowExpandData>key);