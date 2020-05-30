export interface IAccident {
    id: number;
    source?: string;
    tmc?: number;
    severity?: number;
    start_time?: Date;
    end_time?: Date;
    start_latitude?: number;
    start_longitude?: number;
    end_latitude?: number;
    end_longitude?: number;
    distance?: number;
    description?: string;
    number?: number;
    street?: string;
    side?: string;
    city?: string;
    county?: string;
    state?: string;
    zipcode?: string;
    country?: string;
    timezone?: string;
    airport_code?: string;
    weather_timestamp?: string;
    temperature?: number;
    wind_chill?: number;
    humidity?: number;
    pressure?: number;
    visibility?: number;
    wind_direction?: string;
    wind_speed?: number;
    precipitation?: number;
    weather_condition?: number;
    amenity?: boolean;
    bump?: boolean;
    crossing?: boolean;
    give_way?: boolean;
    junction?: boolean;
    no_exit?: boolean;
    railway?: boolean;
    roundabout?: boolean;
    station?: boolean;
    stop?: boolean;
    traffic_calming?: boolean;
    traffic_signal?: boolean;
    turning_loop?: boolean;
    sunrise_sunset?: boolean;
    civil_twilight?: boolean;
    nautical_twilight?: boolean;
    astronomical_twilight?: boolean;
}