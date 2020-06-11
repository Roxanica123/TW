import { IAccidentsRepository, AccidentsRepository } from "../../domain/repositories";
import { IAccidentsQuery } from "../IAccidentsQuery";
import { IEvolutionData } from ".";
import { QueryBuilder } from "../QueryBuilder";
import { IEvolutionDate } from "../../domain/entities/IEvolutionDate";

export class EvolutionQuery {

    private readonly repository: IAccidentsRepository;
    private readonly query: IAccidentsQuery;

    constructor(query: IAccidentsQuery) {
        this.repository = new AccidentsRepository();
        this.query = query;
    }

    public async execute(): Promise<IEvolutionData> {
        let limit: number = 1000;
        const filterQuery: string = new QueryBuilder(this.query).build();
        try {
            if (this.query.limit !== undefined)
                limit = this.query.limit;
        }
        catch{ }
        const queryResult: IEvolutionDate[] = await this.repository.getEvolutionDate(filterQuery);
        return { evolutionData: queryResult };
    }
}