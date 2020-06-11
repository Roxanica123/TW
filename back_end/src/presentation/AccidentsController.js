"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccidentsController = void 0;
var action_results_1 = require("../../teddy/action-results");
var decorators_1 = require("../../teddy/decorators");
var heat_map_1 = require("../business/heat-map");
var statistics_1 = require("../business/statistics");
var DetailsTableQuery_1 = require("../business/details/DetailsTableQuery");
var evolution_1 = require("../business/evolution");
var AccidentsController = /** @class */ (function () {
    function AccidentsController() {
    }
    AccidentsController.prototype.getEvolutionData = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new evolution_1.EvolutionQuery(query).execute()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new action_results_1.Ok(JSON.stringify(result))];
                }
            });
        });
    };
    AccidentsController.prototype.getHeatMap = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new heat_map_1.HeatMapQuery(query).execute()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new action_results_1.Ok(JSON.stringify(result))];
                }
            });
        });
    };
    AccidentsController.prototype.getStatistics = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new statistics_1.BubbleChartQuery(query).execute()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new action_results_1.Ok(JSON.stringify(result))];
                }
            });
        });
    };
    AccidentsController.prototype.getCharts = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new statistics_1.ChartsQuery(query).execute()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new action_results_1.Ok(JSON.stringify(result))];
                }
            });
        });
    };
    AccidentsController.prototype.getTable = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new DetailsTableQuery_1.DetailsTableQuery(query).execute()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new action_results_1.Ok(JSON.stringify(result))];
                }
            });
        });
    };
    AccidentsController.prototype.postAccidents = function () {
        var result = new action_results_1.Ok();
        return result;
    };
    AccidentsController.prototype.deleteAccidents = function () {
        var result = new action_results_1.NoContent();
        return result;
    };
    __decorate([
        decorators_1.HttpGet("/evolution")
    ], AccidentsController.prototype, "getEvolutionData", null);
    __decorate([
        decorators_1.HttpGet("/heat-map")
    ], AccidentsController.prototype, "getHeatMap", null);
    __decorate([
        decorators_1.HttpGet("/statistics/bubble-chart")
    ], AccidentsController.prototype, "getStatistics", null);
    __decorate([
        decorators_1.HttpGet("/statistics/charts")
    ], AccidentsController.prototype, "getCharts", null);
    __decorate([
        decorators_1.HttpGet("/details")
    ], AccidentsController.prototype, "getTable", null);
    __decorate([
        decorators_1.HttpPost()
    ], AccidentsController.prototype, "postAccidents", null);
    __decorate([
        decorators_1.HttpDelete()
    ], AccidentsController.prototype, "deleteAccidents", null);
    AccidentsController = __decorate([
        decorators_1.Controller('/accidents')
    ], AccidentsController);
    return AccidentsController;
}());
exports.AccidentsController = AccidentsController;
