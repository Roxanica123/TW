import { IHeatMapCoordinates } from "../entities";

export interface IHeatMapRepository{
    getLatestAccidentsCoordinates(limit:number) : Promise<IHeatMapCoordinates[]>;
}