import { HttpActionResult, Ok, NoContent, NotFound } from "../../teddy/action-results";
import { Controller, HttpDelete, HttpPost, HttpGet } from "../../teddy/decorators";
import { HeatMapQuery, IHeatMapData } from "../business/heat-map";
import { ChartsQuery, IBubbleChartData, BubbleChartQuery, IChartsData } from "../business/statistics";
import { DetailsTableQuery } from "../business/details/DetailsTableQuery";
import { IDetailsTableData } from "../business/details";
import { IAccidentsQuery } from "../business/IAccidentsQuery";
import { IEvolutionData, EvolutionQuery } from "../business/evolution";
import { AccidentsRepository } from "../domain/repositories/AccidentsRepository"
import { IAccident } from "../domain/entities";

@Controller('/accidents')
export class AccidentsController {
    
    @HttpGet('/')
    public async getAll(_query: any) {
        let repository = new AccidentsRepository
        const accidents = await repository.getAll()

        if (accidents)
            return new Ok(JSON.stringify({ 'accidents': accidents }));
        else
            return new NotFound(JSON.stringify({ 'message': 'Could not get accidents' }));
    }

    @HttpPost('/')
    public async post(_query: any, body: IAccident) {
       
        let repository = new AccidentsRepository
        const id = body.id
        const source =  body.source
        const tmc = body.tmc
        const severity = body.severity
        const start_time = body.start_time
        const end_time = body.end_time
        const start_latitude = body.start_latitude
        const start_longitude = body.start_longitude
        const end_latitude = body.end_latitude
        const end_longitude = body.end_longitude
        const distance = body.distance
        const description = body.description
        const number = body.number
        const street = body.street
        const side = body.side
        const city = body.city
        const county = body.county
        const state = body.state
        const zipcode = body.zipcode
        const country = body.country
        const timezone = body.timezone
        const airport_code = body.airport_code
        const weather_timestamp = body.weather_timestamp
        const temperature = body.temperature
        const wind_chill = body.wind_chill
        const humidity = body.humidity
        const pressure = body.pressure
        const visibility = body.visibility
        const wind_direction = body.wind_direction
        const wind_speed = body.wind_speed
        const precipitation = body.precipitation
        const weather_condition = body.weather_condition
        const amenity = body.amenity
        const bump = body.bump
        const crossing = body.crossing
        const give_way = body.give_way
        const junction = body.junction
        const no_exit = body.no_exit
        const railway = body.railway
        const roundabout = body.roundabout
        const station = body.station
        const stop = body.stop
        const traffic_calming = body.traffic_calming
        const traffic_signal = body.traffic_signal
        const turning_loop = body.turning_loop
        const sunrise_sunset = body.sunrise_sunset
        const civil_twilight = body.civil_twilight
        const nautical_twilight = body.nautical_twilight
        const astronomical_twilight = body.astronomical_twilight
  
        const accident = await repository.insertAccident( id, source, tmc, severity, start_time, end_time, start_latitude, start_longitude, end_latitude, end_longitude, distance, description, number, street, side, city, county, state, zipcode, country, timezone, airport_code, weather_timestamp, temperature, wind_chill, humidity, pressure, visibility, wind_direction, wind_speed, precipitation, weather_condition, amenity, bump, crossing, give_way, junction, no_exit, railway, roundabout, station, stop, traffic_calming, traffic_signal, turning_loop, sunrise_sunset, civil_twilight, nautical_twilight, astronomical_twilight);

        if (accident)
            return new Ok(JSON.stringify({ 'massage': 'New accident inserted' }));
        else
            return new NotFound(JSON.stringify({ 'message': 'Could not insert accident' }));
    }

    @HttpDelete('/')
    public async delete(_query: any, body: IAccident) {
       
        let repository = new AccidentsRepository
        const id = body.id;
        const user = await repository.removeById(id)

        if (user)
            return new Ok(JSON.stringify({ 'message': 'Accident deleted' }));
        else
            return new NotFound(JSON.stringify({ 'message': 'Could not delete user' }));
    }

    @HttpGet("/evolution")
    public async getEvolutionData(query: IAccidentsQuery): Promise<HttpActionResult> {
        const result: IEvolutionData = await new EvolutionQuery(query).execute();
        return new Ok(JSON.stringify(result));
    }

    @HttpGet("/heat-map")
    public async getHeatMap(query: IAccidentsQuery): Promise<HttpActionResult> {
        const result: IHeatMapData = await new HeatMapQuery(query).execute();
        return new Ok(JSON.stringify(result));
    }

    @HttpGet("/statistics/bubble-chart")
    public async getStatistics(query: IAccidentsQuery): Promise<HttpActionResult> {
        const result: IBubbleChartData = await new BubbleChartQuery(query).execute();
        return new Ok(JSON.stringify(result));
    }
    @HttpGet("/statistics/charts")
    public async getCharts(query: IAccidentsQuery): Promise<HttpActionResult> {
        const result: IChartsData = await new ChartsQuery(query).execute();
        return new Ok(JSON.stringify(result));
    }

    @HttpGet("/details")
    public async getTable(query: IAccidentsQuery): Promise<HttpActionResult> {
        const result: IDetailsTableData = await new DetailsTableQuery(query).execute();
        return new Ok(JSON.stringify(result));
    }


    @HttpPost()
    public postAccidents(): HttpActionResult {
        const result: HttpActionResult = new Ok();
        return result;
    }

    @HttpDelete()
    public deleteAccidents(): HttpActionResult {
        const result: HttpActionResult = new NoContent();
        return result;
    }
}