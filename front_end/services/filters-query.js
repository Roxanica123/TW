export class FiltersQuery {
    limit;
    point_of_interest;
    start_date;
    end_date;
    state;
    severity;
    weather_condition;
    multiselect;
    constructor() {
        this.limit = 2000;
        this.point_of_interest = undefined;
        this.start_date = undefined;
        this.end_date = undefined;
        this.state = undefined;
        this.severity = undefined;
        this.weather_condition = undefined;
        this.multiselect = undefined;
    }
    static queryInstance = new FiltersQuery();

    reset() {
        FiltersQuery.queryInstance = new FiltersQuery();
    }

    getQueryString() {
        let queryString = `limit=${escape(this.limit)}`;
        if (this.point_of_interest !== undefined)
            queryString += `&point_of_interest=${escape(this.point_of_interest)}`;
        if (this.start_date !== undefined)
            queryString += `&start_date=${escape(this.start_date)}`;
        if (this.end_date !== undefined)
            queryString += `&end_date=${escape(this.end_date)}`;
        if (this.state !== undefined)
            queryString += `&state=${escape(this.state)}`;
        if (this.severity !== undefined)
            queryString += `&severity=${escape(this.severity)}`;
        if (this.weather_condition !== undefined)
            queryString += `&weather_condition=${escape(this.weather_condition)}`;
        if (this.multiselect !== undefined) {
            queryString += `&multiselect=${escape(JSON.stringify(this.multiselect))}`
        }
        return queryString;
    }

    setLimit(limit) {
        if (limit !== undefined)
            this.limit = limit;
    }
    setPointOfInterest(poi) {
        this.point_of_interest = poi;
    }
    setStartDate(start_date) {
        this.start_date = start_date;
    }
    setEndDate(end_date) {
        this.end_date = end_date;
    }
    setState(state) {
        this.state = state;
    }
    setSeverity(severity) {
        this.severity = severity;
    }
    setWeatherCondition(weather_condition) {
        this.weather_condition = weather_condition;
    }
    setMultiselect(multiselect) {
        this.multiselect = multiselect;
        console.log(this.getQueryString());
    }


}