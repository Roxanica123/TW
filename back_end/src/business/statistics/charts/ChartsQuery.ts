import { IAccidentsLimitQuery } from "../../IAccidentsLimitQuery";
import { ChartRepositoryFactory } from "../../../domain/repositories";
import { IChartsData, IChart, ChartsIdValues, IChartDataColumnValues, ChartsTextValues } from "./data-types";
import { IChartDataRow } from "../../../domain/entities";

export class ChartsQuery {
    private readonly repositoryFactory: ChartRepositoryFactory;
    private readonly limitQuery: IAccidentsLimitQuery;

    constructor(limitQuery: IAccidentsLimitQuery) {
        this.repositoryFactory = new ChartRepositoryFactory();
        this.limitQuery = limitQuery;
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
        let limit: number = 500;
        try {
            limit = this.limitQuery.limit;
        }
        catch{ }
        const rows: IChartDataRow[] = await this.repositoryFactory[chartName as keyof ChartRepositoryFactory].call(null).getChartData(limit);
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