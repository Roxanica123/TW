import { HttpActionResult, Ok, NoContent, NotFound } from "../../teddy/action-results";
import { Controller, HttpDelete, HttpPost, HttpGet } from "../../teddy/decorators";
import { HeatMapQuery, IHeatMapData } from "../business/heat-map";
import { ChartsQuery, IBubbleChartData, BubbleChartQuery, IChartsData } from "../business/statistics";
import { DetailsTableQuery } from "../business/details/DetailsTableQuery";
import { IDetailsTableData } from "../business/details";
import { IAccidentsQuery } from "../business/IAccidentsQuery";
import { IEvolutionData, EvolutionQuery } from "../business/evolution";
import { IAccident } from "../domain/entities";
import { AccidentsRepository } from "../persistence/repositories";

@Controller('/accidents')
export class AccidentsController {
    
    @HttpGet('/')
    public async getAll(_query: any) {
        let repository = new AccidentsRepository();
        const accidents = await repository.getAll()

        if (accidents)
            return new Ok(JSON.stringify({ 'accidents': accidents }));
        else
            return new NotFound(JSON.stringify({ 'message': 'Could not get accidents' }));
    }

    @HttpPost('/')
    public async post(_query: any, body: IAccident) {
       
        let repository = new AccidentsRepository();
        const accident = await repository.insertAccident( body.id, body.source, body.tmc, body.severity, body.start_time, body.end_time, body.start_latitude, body.start_longitude, body.end_latitude, body.end_longitude, body.distance, body.description, body.number, body.street, body.side, body.city, body.county, body.state, body.zipcode, body.country, body.timezone, body.airport_code, body.weather_timestamp, body.temperature, body.wind_chill, body.humidity, body.pressure, body.visibility, body.wind_direction, body.wind_speed, body.precipitation, body.weather_condition, body.amenity, body.bump, body.crossing, body.give_way, body.junction, body.no_exit, body.railway, body.roundabout, body.station, body.stop, body.traffic_calming, body.traffic_signal, body.turning_loop, body.sunrise_sunset, body.civil_twilight, body.nautical_twilight, body.astronomical_twilight);

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