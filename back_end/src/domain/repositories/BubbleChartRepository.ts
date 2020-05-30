import { IBubbleChartRepository } from "./IBubbleChartRepository";
import { IBubbleChartPoint } from "../entities";
import { Connection } from "../../persistence";

export class BubbleChartRepository implements IBubbleChartRepository{

    private readonly connection: Connection;

    constructor() {
        this.connection = new Connection();
    }
    
    public async getAccidentsLocationInfo(limit: number): Promise<IBubbleChartPoint[]> {
        const query: string = "SELECT id, start_lat, start_lng, state, severity FROM accidents ORDER BY start_time DESC LIMIT " + limit;
        const points: IBubbleChartPoint[] = await this.connection.execute(query);
        return points;
    }

}