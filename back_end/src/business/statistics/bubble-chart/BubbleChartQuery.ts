import { IAccidentsRepository} from "../../../domain/repositories";
import { IBubbleChartData } from ".";
import { IBubbleChartPoint, IBubbleChartPointKeys } from "../../../domain/entities";
import { QueryBuilder, IAccidentsQuery } from "../..";
import { AccidentsRepository } from "../../../persistence/repositories";

export class BubbleChartQuery {
    private readonly repository: IAccidentsRepository;
    private readonly query: IAccidentsQuery;

    constructor(query: IAccidentsQuery) {
        this.repository = new AccidentsRepository();
        this.query = query;
    }

    public async execute(): Promise<IBubbleChartData> {
        let limit: number = 500;
        const filterQuery: string = new QueryBuilder(this.query).build();
        try {
            if (this.query.limit !== undefined)
                limit = this.query.limit;
        }
        catch{ }
        const queryResult: IBubbleChartPoint[] = await this.repository.getAccidentsLocationInfo(filterQuery, limit);
        return {
            bubbleChartData: [IBubbleChartPointKeys].concat(queryResult.map(point => [point.id.toString(), point.start_lng, point.start_lat, point.state, point.severity]))
        };
    }
}