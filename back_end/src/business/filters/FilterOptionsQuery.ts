import { IAccidentsRepository } from "../../domain/repositories";
import { AccidentsRepository } from "../../persistence/repositories";
import { IOptionsData } from "./IOptionsData";
import { IFilterQuery } from "../IFilterQuery";

export class FilterOptionsQuery {
    private readonly repository: IAccidentsRepository;
    private readonly query: IFilterQuery;

    constructor(query: IFilterQuery) {
        this.repository = new AccidentsRepository();
        this.query = query;
    }

    public async execute(): Promise<IOptionsData> {
        let queryResult: any[] = [];
        try {
            const filter: string = this.query.filter;
            queryResult = await this.repository.getFilterOptions(filter);
        }
        catch{
            queryResult = [];
        }
        return { options: queryResult };
    }
}