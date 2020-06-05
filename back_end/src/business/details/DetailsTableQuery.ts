import { IAccidentsTablePageQuery } from "../IAccidentsTablePageQuery";
import { ITableRowData, TableRowHeaderKeys, TableRowExpandKeys as TableRowExpandKeys } from "../../domain/entities";
import { ITableRepository, TableRepository } from "../../domain/repositories";
import { IDetailsTableData, IDetailsTableRowData } from ".";

export class DetailsTableQuery {

    private readonly repository: ITableRepository;
    private readonly pageQuery: IAccidentsTablePageQuery;

    constructor(pageQuery: IAccidentsTablePageQuery) {
        this.repository = new TableRepository();
        this.pageQuery = pageQuery;
    }

    public async execute(): Promise<IDetailsTableData> {
        let page: number = 0;
        try {
            page = this.pageQuery.page;
        }
        catch{ }
        const queryResult: ITableRowData[] = await this.repository.getAccidentsDetailsTable(page);
        const tableData: IDetailsTableData = {
            table_data: queryResult.map(row => {
                const header: IDetailsTableRowData[] = TableRowHeaderKeys.map(key => {
                    return { title: key, content: row[key] };
                });
                const expand: IDetailsTableRowData[] = TableRowExpandKeys.map(key => {
                    return { title: key, content: row[key] };
                })
                return { header_info: header, expand_info: expand };
            })
        };
        return tableData;
    }
}