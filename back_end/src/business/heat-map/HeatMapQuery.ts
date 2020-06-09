import { IHeatMapCoordinates } from "../../domain/entities";
import { IAccidentsRepository, AccidentsRepository } from "../../domain/repositories"
import { IHeatMapData } from "./IHeatMapData";
import { IAccidentsQuery } from "../IAccidentsQuery";
import { QueryBuilder } from "../QueryBuilder";

export class HeatMapQuery {

    private readonly repository: IAccidentsRepository;
    private readonly query: IAccidentsQuery;

    constructor(query: IAccidentsQuery) {
        this.repository = new AccidentsRepository();
        this.query = query;
    }

    public async execute(): Promise<IHeatMapData> {
        let limit: number = 1000;
        const filterQuery: string = new QueryBuilder(this.query).build();
        try {
            if (this.query.limit !== undefined)
                limit = this.query.limit;
        }
        catch{ }
        const queryResult: IHeatMapCoordinates[] = await this.repository.getAccidentsCoordinates(filterQuery, limit);
        return { heatMapData: queryResult.map(coordinates => [coordinates.start_lng, coordinates.start_lat, coordinates.severity]) };
    }
}