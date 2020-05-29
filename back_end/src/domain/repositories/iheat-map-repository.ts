export interface IHeatMapRepository{
    getLatestAccidentsCoordinates(limit:number) : Promise<any[]>;
}