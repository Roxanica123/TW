import { Filters } from "./AvailableFilters";

export interface IAvailableFiltersData {
    available_filters: (keyof Filters)[];
}