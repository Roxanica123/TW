import { ITableRowData, TableRowHeaderDataKeys, TableRowExpandDataKeys } from "../../domain/entities";
import { IAccidentsRepository, AccidentsRepository } from "../../domain/repositories";
import { IDetailsTableData, IDetailsTableRowData } from ".";
import { IAccidentsQuery } from "../IAccidentsQuery";
import { QueryBuilder } from "../QueryBuilder";

export class DetailsTableQuery {

    private readonly repository: IAccidentsRepository;
    private readonly query: IAccidentsQuery;

    constructor(query: IAccidentsQuery) {
        this.repository = new AccidentsRepository();
        this.query = query;
    }

    public async execute(): Promise<IDetailsTableData> {
        let page: number = 0;
        let limit: number = 10;
        const filterQuery: string = new QueryBuilder(this.query).build();
        try {
            if (this.query.limit !== undefined)
                limit = this.query.pageLimit;
            if (this.query.page !== undefined)
                page = this.query.page;

        }
        catch{ }
        const queryResult: ITableRowData[] = await this.repository.getAccidentsDetails(filterQuery, page, limit);
        const tableData: IDetailsTableData = {
            table_data: queryResult.map(row => {
                const header: IDetailsTableRowData[] = TableRowHeaderDataKeys.map(key => {
                    return { title: key, content: row[key] };
                });
                const expand: IDetailsTableRowData[] = TableRowExpandDataKeys.map(key => {
                    return { title: key, content: row[key] };
                })
                return { header_info: header, expand_info: expand };
            })
        };

        return tableData;
    }
}