"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRowExpandDataKeys = exports.TableRowHeaderDataKeys = exports.TableRowExpandData = exports.TableRowHeaderData = void 0;
var TableRowHeaderData = /** @class */ (function () {
    function TableRowHeaderData() {
        this.id = "";
        this.date = "";
        this.time = "";
        this.timezone = "";
        this.severity = "";
        this.state = "";
    }
    return TableRowHeaderData;
}());
exports.TableRowHeaderData = TableRowHeaderData;
var TableRowExpandData = /** @class */ (function () {
    function TableRowExpandData() {
        this.exact_location = "";
        this.description = "";
        this.point_of_interest = "";
        this.weather_condition = "";
        this.weather_details = "";
        this.traffic_message_canal = "";
        this.source = "";
    }
    return TableRowExpandData;
}());
exports.TableRowExpandData = TableRowExpandData;
exports.TableRowHeaderDataKeys = Object.keys(new TableRowHeaderData()).map(function (key) { return key; });
exports.TableRowExpandDataKeys = Object.keys(new TableRowExpandData()).map(function (key) { return key; });
