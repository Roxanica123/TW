import { IHeatMapCoordinates } from "../../domain/entities";
import { IHeatMapRepository, HeatMapRepository } from "../../domain/repositories"
import { IHeatMapData } from "./iheat-map-data";
import { IAccidentsLimitQuery } from "./iaccidents-limit-query";

export class HeatMapQuery {

    private readonly repository: IHeatMapRepository;
    private readonly limitQuery: IAccidentsLimitQuery;
    constructor(limitQuery: IAccidentsLimitQuery) {
        this.repository = new HeatMapRepository();
        this.limitQuery = limitQuery;
    }

    public async execute(): Promise<IHeatMapData> {
        let limit: number = 100;
        try {
            limit = this.limitQuery.limit;
        }
        catch{ }
        const queryResult: IHeatMapCoordinates[] = await this.repository.getLatestAccidentsCoordinates(limit);
        return { heatMapData: queryResult.map(coordinate => [coordinate.start_lng, coordinate.start_lat]) };
    }
}