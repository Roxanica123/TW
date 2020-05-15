export const createTableQuery: string = "CREATE TABLE ?? (\
    id BIGINT PRIMARY KEY AUTO_INCREMENT,\
    source TEXT,\
    tmc DOUBLE,\
    severity INT,\
    start_time DATETIME,\
    end_time DATETIME,\
    start_lat DOUBLE,\
    start_lng DOUBLE,\
    end_lat DOUBLE,\
    end_lng DOUBLE,\
    distance DOUBLE,\
    description TEXT,\
    number DOUBLE, \
    street TEXT,\
    side TEXT,\
    city TEXT,\
    county TEXT,\
    state TEXT,\
    zipcode TEXT,\
    country TEXT,\
    timezone TEXT,\
    airport_code TEXT,\
    weather_timestamp DATETIME,\
    temperature DOUBLE,\
    wind_chill DOUBLE,\
    humidity DOUBLE,\
    pressure DOUBLE,\
    visibility DOUBLE,\
    wind_direction TEXT,\
    wind_speed DOUBLE,\
    precipitation DOUBLE,\
    weather_condition TEXT,\
    amenity BOOLEAN,\
    bump BOOLEAN,\
    crossing BOOLEAN,\
    give_way BOOLEAN,\
    junction BOOLEAN,\
    no_exit BOOLEAN,\
    railway BOOLEAN,\
    roundabout BOOLEAN,\
    station BOOLEAN,\
    stop BOOLEAN,\
    traffic_calming BOOLEAN,\
    traffic_signal BOOLEAN,\
    turning_loop BOOLEAN,\
    sunrise_sunset TEXT,\
    civil_twilight TEXT,\
    nautical_twilight TEXT,\
    astronomical_twilight TEXT)";
export const insertRowQuery: string = "INSERT INTO ?? (source, tmc, severity, start_time, end_time, \
            start_lat, start_lng, end_lat, end_lng, distance, description, \
            number, street, side, city, county, state , zipcode, country , timezone , airport_code,\
            weather_timestamp, temperature, wind_chill, humidity, pressure, \
            visibility, wind_direction, wind_speed, precipitation,\
            weather_condition, amenity, bump, crossing, give_way, junction, no_exit, railway, \
            roundabout, station, stop, traffic_calming, traffic_signal, turning_loop, \
            sunrise_sunset, civil_twilight, nautical_twilight, astronomical_twilight) VALUES \
            ( ? , Convert(?, double), Convert(?, unsigned integer), STR_TO_DATE(?, '%Y-%m-%d %T'),\
            STR_TO_DATE(?, '%Y-%m-%d %T'), Convert(?, double), Convert(?, double), Convert(?, double),\
            Convert(?, double), Convert(?, double), ?, Convert(?, double), ?, ?, ?, ?, ?, ?, ?, ?, \
              ?, STR_TO_DATE(?, '%Y-%m-%d %T'), Convert(?, double), Convert(?, double), Convert(?, double),\
            Convert(?, double), Convert(?, double), ?, Convert(?, double), Convert(?, double), ?, STRCMP(?,'TRUE')=0, STRCMP(?,'TRUE')=0, \
            STRCMP(?,'TRUE')=0, STRCMP(?,'TRUE')=0 ,STRCMP(?,'TRUE')=0, STRCMP(?,'TRUE')=0, STRCMP(?,'TRUE')=0, STRCMP(?,'TRUE')=0,\
            STRCMP(?,'TRUE')=0, STRCMP(?,'TRUE')=0, STRCMP(?,'TRUE')=0, STRCMP(?,'TRUE')=0, STRCMP(?,'TRUE')=0, ?, ?, ?, ?)";
