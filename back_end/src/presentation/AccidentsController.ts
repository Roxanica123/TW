import { HttpActionResult, Ok, NoContent } from "../../teddy/action-results";
import { Controller, HttpDelete, HttpPost, HttpGet } from "../../teddy/decorators";
import { HeatMapQuery, IHeatMapData } from "../business/heat-map";
import { IAccidentsLimitQuery } from "../business/IAccidentsLimitQuery";
import { IBubbleChartData, BubbleChartQuery } from "../business/statistics/bubble-chart";
import { IChartsData } from "../business/statistics/charts/";
import { ChartsQuery } from "../business/statistics";
import { IAccidentsTablePageQuery } from "../business/IAccidentsTablePageQuery";
import { DetailsTableQuery } from "../business/details/DetailsTableQuery";
import { IDetailsTableData } from "../business/details";

@Controller('/accidents')
export class AccidentsController {

    @HttpGet()
    public getAccidents(): HttpActionResult {
        const result: Ok = new Ok();
        return result;
    }

    @HttpGet("/heat-map")
    public async getHeatMap(query: IAccidentsLimitQuery): Promise<HttpActionResult> {
        const result: IHeatMapData = await new HeatMapQuery(query).execute();
        return new Ok(JSON.stringify(result));
    }

    @HttpGet("/statistics/bubble-chart")
    public async getStatistics(query: IAccidentsLimitQuery): Promise<HttpActionResult> {
        const result: IBubbleChartData = await new BubbleChartQuery(query).execute();
        return new Ok(JSON.stringify(result));
    }
    @HttpGet("/statistics/charts")
    public async getCharts(query: IAccidentsLimitQuery): Promise<HttpActionResult> {
        const result: IChartsData = await new ChartsQuery(query).execute();
        return new Ok(JSON.stringify(result));
    }

    @HttpGet("/details")
    public async getTable(query: IAccidentsTablePageQuery): Promise<HttpActionResult> {
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