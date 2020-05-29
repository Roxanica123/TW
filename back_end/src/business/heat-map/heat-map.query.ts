import { IHeatMapCoordinates } from "../../domain/entities";
import { IHeatMapRepository, HeatMapRepository } from "../../domain/repositories"
import { IHeatMapData } from "./Iheat-map-data";
import { IAccidentsLimitQuery } from "../Iaccidents-limit-query";

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
        return { heatMapData: queryResult.map(coordinates => [coordinates.start_lng, coordinates.start_lat, coordinates.severity]) };
    }
}