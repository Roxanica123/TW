import { AccidentsRepository } from "../AccidentsRepository";
import { IAccidentsRepository } from "../IAccidentsRepository";

export class ChartRepositoryFactory {
    private readonly accidentsRepository: IAccidentsRepository;
    constructor() {
        this.accidentsRepository = new AccidentsRepository();
    }
    public timeOfDay: Function = this.accidentsRepository.getAccidentsTimeOfDayDistribution;
    public dayOfWeek: Function = this.accidentsRepository.getAccidentsDaysOfWeekDistribution;
    public weatherCondition: Function = this.accidentsRepository.getAccidentsWeatherCondition;
    public severity: Function = this.accidentsRepository.getAccidentsSeverityDistribution;
    public state: Function = this.accidentsRepository.getAccidentsStateDistribution;
    public pointOfInterest: Function = this.accidentsRepository.getAccidentsPointsOfInterestDistribution;
}