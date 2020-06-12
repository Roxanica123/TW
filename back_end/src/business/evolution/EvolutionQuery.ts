import { IAccidentsRepository } from "../../domain/repositories";
import { IAccidentsQuery } from "../IAccidentsQuery";
import { IEvolutionData } from ".";
import { QueryBuilder } from "../QueryBuilder";
import { IEvolutionDate } from "../../domain/entities/IEvolutionDate";
import { AccidentsRepository } from "../../persistence/repositories";

export class EvolutionQuery {

    private readonly repository: IAccidentsRepository;
    private readonly query: IAccidentsQuery;

    constructor(query: IAccidentsQuery) {
        this.repository = new AccidentsRepository();
        this.query = query;
    }

    public async execute(): Promise<IEvolutionData> {
        const filterQuery: string = new QueryBuilder(this.query).build();
        const queryResult: IEvolutionDate[] = await this.repository.getEvolutionDate(filterQuery);
        return { evolutionData: queryResult };
    }
}