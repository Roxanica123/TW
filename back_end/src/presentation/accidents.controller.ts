import { HttpActionResult, Ok, NoContent } from "../../teddy/action-results";
import { Controller, HttpDelete, HttpPost, HttpGet } from "../../teddy/decorators";

@Controller('/accidents')
export class AccidentsController {

    @HttpGet()
    public getAccidents(): HttpActionResult {
        const result: Ok = new Ok();
        return result;
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