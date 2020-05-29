export interface IBubbleChartPoint {
    id: number;
    start_lat: number;
    start_lng: number;
    state: string;
    severity: number;
}
export const IBubbleChartPointKeys: any[] = ["Id", "Latitude", "Longitude", "State", "Severity"];