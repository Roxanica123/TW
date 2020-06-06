import { IHeatMapCoordinates } from "../../domain/entities";
import { IAccidentsRepository, AccidentsRepository } from "../../domain/repositories"
import { IHeatMapData } from "./IHeatMapData";
import { IAccidentsLimitQuery } from "../IAccidentsLimitQuery";

export class HeatMapQuery {

    private readonly repository: IAccidentsRepository;
    private readonly limitQuery: IAccidentsLimitQuery;

    constructor(limitQuery: IAccidentsLimitQuery) {
        this.repository = new AccidentsRepository();
        this.limitQuery = limitQuery;
    }

    public async execute(): Promise<IHeatMapData> {
        let limit: number = 100;
        try {
            limit = this.limitQuery.limit;
        }
        catch{ }
        const queryResult: IHeatMapCoordinates[] = await this.repository.getAccidentsCoordinates(limit);
        return { heatMapData: queryResult.map(coordinates => [coordinates.start_lng, coordinates.start_lat, coordinates.severity]) };
    }
}