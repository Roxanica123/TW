import { TimeOfDayChartRepository } from "./TimeOfDayChartRepository";
import { DayOfWeekChartRepository } from "./DayOfWeekChartRepository";
import { WeatherConditionChartRepository } from "./WeatherConditionChartRepository";
import { SeverityChartRepository } from "./SeverityChartRepository";
import { StateChartRepository } from "./StateChartRepository";
import { PointOfInterestChartRepository } from "./PointOfInterestChartRepository";

export class ChartRepositoryFactory {

    public timeOfDay: Function = () => { return new TimeOfDayChartRepository() };
    public dayOfWeek: Function = () => { return new DayOfWeekChartRepository() };
    public weatherCondition: Function = () => { return new WeatherConditionChartRepository() };
    public severity: Function = () => { return new SeverityChartRepository() };
    public state: Function = () => { return new StateChartRepository() };
    public pointOfInterest: Function = () => { return new PointOfInterestChartRepository() };
}