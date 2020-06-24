import { IAccident } from "../../domain/entities";

export class Filters implements IAccident {
    id: number = 0;
    source?: string | undefined = "";
    tmc?: number | undefined = 0;
    severity?: number | undefined = 0;
    city?: string | undefined = "";
    county?: string | undefined = "";
    state?: string | undefined = "";
    timezone?: string | undefined = "";
    airport_code?: string | undefined = "";
    wind_direction?: string | undefined = "";
    weather_condition?: number | undefined = 0;
    point_of_interest?: string | undefined = "";
    sunrise_sunset?: string | undefined = "";
    civil_twilight?: string | undefined = "";
    nautical_twilight?: string | undefined = "";
    astronomical_twilight?: string | undefined = "";
}
export class AvailableFilters {
    private readonly availableFilters: (keyof Filters)[];
    constructor() {
        this.availableFilters = Object.keys(new Filters()).filter(key => key !== "id").map(key => <keyof Filters>key);
    }
    public getFilters(): (keyof Filters)[] {
        return this.availableFilters;
    }
}