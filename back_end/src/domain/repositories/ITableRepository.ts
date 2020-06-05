import { ITableRowData } from "../entities";



export interface ITableRepository {
    getAccidentsDetailsTable(page: number, limit:number): Promise<ITableRowData[]>;
}