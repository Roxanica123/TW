import { IHeatMapRepository } from "./iheat-map-repository";
import { Connection } from "../../persistence";
import { IHeatMapCoordinates } from "../entities";

export class HeatMapRepository implements IHeatMapRepository {

    private readonly connection: Connection;

    constructor() {
        this.connection = new Connection();
    }
    public async getLatestAccidentsCoordinates(limit: number): Promise<IHeatMapCoordinates[]> {
        const query: string = "SELECT start_lat, start_lng FROM accidents ORDER BY start_time DESC LIMIT " + limit;
        const coordinates: IHeatMapCoordinates[] = await this.connection.execute(query);
        return coordinates;
    }
}