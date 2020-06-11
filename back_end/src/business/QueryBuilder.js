"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryBuilder = void 0;
var IAccidentsQuery_1 = require("./IAccidentsQuery");
var QueryBuilder = /** @class */ (function () {
    function QueryBuilder(query) {
        var _this = this;
        this.start_date = new Date("2000-01-01").toISOString().slice(0, 19).replace('T', " ");
        this.end_date = new Date().toISOString().slice(0, 19).replace('T', " ");
        if (query === undefined)
            return;
        IAccidentsQuery_1.AccidentsQueryKeys.forEach(function (key) {
            if (query[key] !== undefined)
                _this[key] = query[key];
        });
    }
    QueryBuilder.prototype.build = function () {
        var query = " WHERE accidents.start_time BETWEEN '" + this.start_date + "' AND '" + this.end_date + "' ";
        if (this.point_of_interest !== undefined) {
            query += " AND (select if(CONVERT(point_of_interest USING utf8mb4)='', \"None\", CONVERT(point_of_interest USING utf8mb4))                         from converted_points_of_interest poi where poi.id= accidents.id) = '" + this.point_of_interest + "' ";
        }
        if (this.state !== undefined) {
            query += " AND accidents.state= '" + this.state + "' ";
        }
        if (this.severity !== undefined) {
            query += " AND accidents.severity= " + this.severity + " ";
        }
        if (this.weather_condition !== undefined) {
            query += " AND accidents.weather_condition= '" + this.weather_condition + "' ";
        }
        return query;
    };
    return QueryBuilder;
}());
exports.QueryBuilder = QueryBuilder;
