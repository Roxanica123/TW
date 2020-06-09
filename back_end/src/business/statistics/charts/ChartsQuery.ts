import { ChartRepositoryFactory } from "../../../domain/repositories";
import { IChartsData, IChart, ChartsIdValues, IChartDataColumnValues, ChartsTextValues } from "./data-types";
import { IChartDataRow } from "../../../domain/entities";
import { IAccidentsQuery } from "../../IAccidentsQuery";
import { QueryBuilder } from "../../QueryBuilder";

export class ChartsQuery {
    private readonly repositoryFactory: ChartRepositoryFactory;
    private readonly query: IAccidentsQuery;

    constructor(query: IAccidentsQuery) {
        this.repositoryFactory = new ChartRepositoryFactory();
        this.query = query;
    }

    public async execute(): Promise<IChartsData> {
        const charts: IChart[] = await Promise.all(Object.keys(this.repositoryFactory).map(async key => {
            return await this.getChart(key);
        }));
        return {
            chartsData: charts
        };
    }
    private async getChart(chartName: string): Promise<IChart> {
        const filterQuery: string = new QueryBuilder(this.query).build();
        let limit: number = 500;
        try {
            if (this.query.limit !== undefined)
                limit = this.query.limit;
        }
        catch{ }
        const rows: IChartDataRow[] = await this.repositoryFactory[chartName as keyof ChartRepositoryFactory].call(null).getChartData(filterQuery, limit);
        return {
            id: ChartsIdValues[chartName as keyof ChartsIdValues],
            data: {
                columns: IChartDataColumnValues[<keyof IChartDataColumnValues>chartName],
                rows: rows.map(row => [row[chartName as keyof IChartDataRow], row.count])
            },
            text: ChartsTextValues[chartName as keyof ChartsTextValues]
        };

    }
}