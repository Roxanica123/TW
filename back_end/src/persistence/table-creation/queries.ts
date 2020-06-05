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
export const createAccidentsLocationTable: string = "CREATE TABLE accidents_location (\
  id BIGINT,\
  start_time DATETIME,\
  end_time DATETIME,\
  severity INT,\
  start_lat DOUBLE,\
  start_lng DOUBLE,\
  number DOUBLE, \
  street TEXT,\
  side TEXT,\
  city TEXT,\
  state TEXT)";
export const insertIntoAccidentsLocation: string = "INSERT INTO accidents_location (id, start_time, end_time, severity, start_lat, start_lng, number,\
  street, side, city, state) SELECT id, start_time, end_time, severity, start_lat, start_lng, number, street, side, city, state FROM ??";

export const createTimeOfDayFunction: string = "CREATE\
FUNCTION getTimeOfDay (start_time datetime)\
RETURNS CHAR(11) deterministic\
return case\
  when (date_format(start_time, '%H')*60 + date_format(start_time, '%i')) <180 then '00:01-03:00'\
  when (date_format(start_time, '%H')*60 + date_format(start_time, '%i')) <360 then '03:01-06:00'\
  when (date_format(start_time, '%H')*60 + date_format(start_time, '%i')) <540 then '06:01-09:00'\
  when (date_format(start_time, '%H')*60 + date_format(start_time, '%i')) <720 then '09:01-12:00'\
  when (date_format(start_time, '%H')*60 + date_format(start_time, '%i')) <900 then '12:01-15:00'\
  when (date_format(start_time, '%H')*60 + date_format(start_time, '%i')) <1080 then '15:01-18:00'\
  when (date_format(start_time, '%H')*60 + date_format(start_time, '%i')) <1260 then '18:01-21:00'\
  else '21:01:00:00'\
  end;\
";

export const createPOIView: string = "create view converted_points_of_interest as \
select id, start_time, concat_ws(' and ', Amenity, Bump, Crossing, Give_way, Junction, No_exit, Railway, Roundabout, Station, Stop, Traffic_calming, Traffic_signal, Turning_loop) as point_of_interest from\
(select\
start_time,\
if(amenity=1, 'Amenity', null) as Amenity ,\
if(bump=1, 'Bump', null) as Bump,  \
if(crossing=1, 'Crossing', null) as Crossing,\
if(give_way=1, 'Give way', null) as Give_way,\
if(junction=1, 'Junction', null) as Junction,\
if(no_exit=1, 'No exit', null) as No_exit,\
if(railway=1, 'Railway', null) as Railway,\
if(roundabout=1, 'Roundabout', null) as Roundabout,\
if(station=1, 'Station', null) as Station,\
if(stop=1, 'Stop', null) as Stop,\
if(traffic_calming=1, 'Traffic calming', null) as Traffic_calming,\
if(traffic_signal=1, 'Traffic signal', null) as Traffic_signal,\
if(turning_loop=1, 'Turning loop', null) as Turning_loop from accidents) points";
