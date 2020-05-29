import { IAccidentsLimitQuery } from "../../Iaccidents-limit-query";
import { BubbleChartRepository, IBubbleChartRepository } from "../../../domain/repositories";
import { IBubbleChartData } from "./Ibubble-chart-data";
import { IBubbleChartPoint, IBubbleChartPointKeys } from "../../../domain/entities";

export class BubbleChartQuery {
    private readonly repository: IBubbleChartRepository;
    private readonly limitQuery: IAccidentsLimitQuery;

    constructor(limitQuery: IAccidentsLimitQuery) {
        this.repository = new BubbleChartRepository();
        this.limitQuery = limitQuery;
    }

    public async execute(): Promise<IBubbleChartData> {
        let limit: number = 100;
        try {
            limit = this.limitQuery.limit;
        }
        catch{ }
        const queryResult: IBubbleChartPoint[] = await this.repository.getLatestAccidentsLocationInfo(limit);
        return {
            bubbleChartData: [IBubbleChartPointKeys].concat(queryResult.map(point => [point.id, point.start_lng, point.start_lat, point.severity]))
        };
    }
}