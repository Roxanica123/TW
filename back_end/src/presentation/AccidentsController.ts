import { HttpActionResult, Ok, NoContent } from "../../teddy/action-results";
import { Controller, HttpDelete, HttpPost, HttpGet } from "../../teddy/decorators";
import { HeatMapQuery, IHeatMapData } from "../business/heat-map";
import { ChartsQuery, IBubbleChartData, BubbleChartQuery, IChartsData } from "../business/statistics";
import { DetailsTableQuery } from "../business/details/DetailsTableQuery";
import { IDetailsTableData } from "../business/details";
import { IAccidentsQuery } from "../business/IAccidentsQuery";
import { IEvolutionData, EvolutionQuery } from "../business/evolution";

@Controller('/accidents')
export class AccidentsController {

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