import { IChartDataColumn } from "./IChartDataColumn";

export class IChartDataColumnValues {
    public static timeOfDay: IChartDataColumn[] = [{ id: 'hours', label: 'Hours', type: 'string' },
    { id: 'accidents', label: 'Accidents', type: 'number' }];
    public static dayOfWeek: IChartDataColumn[] = [{ id: 'days-of-week', label: 'Days of week', type: 'string' },
    { id: 'accidents', label: 'Accidents', type: 'number' }];
    public static weatherCondition: IChartDataColumn[] = [{ id: 'weather-condition', label: 'Weather condition', type: 'string' },
    { id: 'accidents', label: 'Accidents', type: 'number' }];
    public static severity: IChartDataColumn[] = [{ id: 'severity', label: 'Severity', type: 'string' },
    { id: 'accidents', label: 'Accidents', type: 'number' }];
    public static state: IChartDataColumn[] = [{ id: 'state', label: 'State', type: 'string' },
    { id: 'accidents', label: 'Accidents', type: 'number' }];
    public static pointOfInterest: IChartDataColumn[] = [{ id: 'point-of-interest', label: 'Point of interest', type: 'string' },
    { id: 'accidents', label: 'Accidents', type: 'number' }];
}