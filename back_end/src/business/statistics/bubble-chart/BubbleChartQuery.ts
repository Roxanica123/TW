import { IAccidentsLimitQuery } from "../../IAccidentsLimitQuery";
import { IAccidentsRepository, AccidentsRepository} from "../../../domain/repositories";
import { IBubbleChartData } from ".";
import { IBubbleChartPoint, IBubbleChartPointKeys } from "../../../domain/entities";

export class BubbleChartQuery {
    private readonly repository: IAccidentsRepository;
    private readonly limitQuery: IAccidentsLimitQuery;

    constructor(limitQuery: IAccidentsLimitQuery) {
        this.repository = new AccidentsRepository();
        this.limitQuery = limitQuery;
    }

    public async execute(): Promise<IBubbleChartData> {
        let limit: number = 500;
        try {
            limit = this.limitQuery.limit;
        }
        catch{ }
        const queryResult: IBubbleChartPoint[] = await this.repository.getAccidentsLocationInfo(limit);
        return {
            bubbleChartData: [IBubbleChartPointKeys].concat(queryResult.map(point => [point.id.toString(), point.start_lng, point.start_lat, point.state ,point.severity]))
        };
    }
}