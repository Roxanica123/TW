"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IChartDataColumnValues = void 0;
var IChartDataColumnValues = /** @class */ (function () {
    function IChartDataColumnValues() {
    }
    IChartDataColumnValues.timeOfDay = [{ id: 'hours', label: 'Hours', type: 'string' },
        { id: 'accidents', label: 'Accidents', type: 'number' }];
    IChartDataColumnValues.dayOfWeek = [{ id: 'days-of-week', label: 'Days of week', type: 'string' },
        { id: 'accidents', label: 'Accidents', type: 'number' }];
    IChartDataColumnValues.weatherCondition = [{ id: 'weather-condition', label: 'Weather condition', type: 'string' },
        { id: 'accidents', label: 'Accidents', type: 'number' }];
    IChartDataColumnValues.severity = [{ id: 'severity', label: 'Severity', type: 'string' },
        { id: 'accidents', label: 'Accidents', type: 'number' }];
    IChartDataColumnValues.state = [{ id: 'state', label: 'State', type: 'string' },
        { id: 'accidents', label: 'Accidents', type: 'number' }];
    IChartDataColumnValues.pointOfInterest = [{ id: 'point-of-interest', label: 'Point of interest', type: 'string' },
        { id: 'accidents', label: 'Accidents', type: 'number' }];
    return IChartDataColumnValues;
}());
exports.IChartDataColumnValues = IChartDataColumnValues;
