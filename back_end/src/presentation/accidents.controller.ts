import { HttpActionResult, Ok, NoContent } from "../../teddy/action-results";
import { Controller, HttpDelete, HttpPost, HttpGet } from "../../teddy/decorators";
import { HeatMapQuery, IHeatMapData } from "../business/heat-map";
import { IAccidentsLimitQuery } from "../business/heat-map/iaccidents-limit-query";

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
        console.log(result);
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