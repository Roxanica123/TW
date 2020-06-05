import { ITableRowData } from "../entities";



export interface ITableRepository {
    getAccidentsDetailsTable(page: number): Promise<ITableRowData[]>;
}