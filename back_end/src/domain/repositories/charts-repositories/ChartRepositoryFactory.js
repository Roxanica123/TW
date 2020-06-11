"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartRepositoryFactory = void 0;
var TimeOfDayChartRepository_1 = require("./TimeOfDayChartRepository");
var DayOfWeekChartRepository_1 = require("./DayOfWeekChartRepository");
var WeatherConditionChartRepository_1 = require("./WeatherConditionChartRepository");
var SeverityChartRepository_1 = require("./SeverityChartRepository");
var StateChartRepository_1 = require("./StateChartRepository");
var PointOfInterestChartRepository_1 = require("./PointOfInterestChartRepository");
var ChartRepositoryFactory = /** @class */ (function () {
    function ChartRepositoryFactory() {
        this.timeOfDay = function () { return new TimeOfDayChartRepository_1.TimeOfDayChartRepository(); };
        this.dayOfWeek = function () { return new DayOfWeekChartRepository_1.DayOfWeekChartRepository(); };
        this.weatherCondition = function () { return new WeatherConditionChartRepository_1.WeatherConditionChartRepository(); };
        this.severity = function () { return new SeverityChartRepository_1.SeverityChartRepository(); };
        this.state = function () { return new StateChartRepository_1.StateChartRepository(); };
        this.pointOfInterest = function () { return new PointOfInterestChartRepository_1.PointOfInterestChartRepository(); };
    }
    return ChartRepositoryFactory;
}());
exports.ChartRepositoryFactory = ChartRepositoryFactory;
