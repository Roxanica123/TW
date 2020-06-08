import { IAccidentsTablePageQuery } from "../IAccidentsTablePageQuery";
import { ITableRowData, TableRowHeaderDataKeys, TableRowExpandDataKeys } from "../../domain/entities";
import { IAccidentsRepository, AccidentsRepository } from "../../domain/repositories";
import { IDetailsTableData, IDetailsTableRowData } from ".";

export class DetailsTableQuery {

    private readonly repository: IAccidentsRepository;
    private readonly pageQuery: IAccidentsTablePageQuery;

    constructor(pageQuery: IAccidentsTablePageQuery) {
        this.repository = new AccidentsRepository();
        this.pageQuery = pageQuery;
    }

    public async execute(): Promise<IDetailsTableData> {
        let page: number = 0;
        let limit: number = 15;
        try {
            page = this.pageQuery.page;
            limit = this.pageQuery.limit;
        }
        catch{ }
        const queryResult: ITableRowData[] = await this.repository.getAccidentsDetails(page, limit);
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