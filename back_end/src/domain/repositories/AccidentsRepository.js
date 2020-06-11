"use strict";
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
exports.AccidentsRepository = void 0;
var persistence_1 = require("../../persistence");
var AccidentsRepository = /** @class */ (function () {
    function AccidentsRepository() {
        this.connection = new persistence_1.Connection();
    }
    AccidentsRepository.prototype.getEvolutionDate = function (filterQuery) {
        return __awaiter(this, void 0, void 0, function () {
            var query, rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT YEAR(start_time) AS 'year', MONTH(start_time) AS 'month', DAY(start_time) AS 'day', count('^') AS 'number'\n        FROM accidents " + filterQuery + " GROUP BY YEAR(start_time), MONTH(start_time), DAY(start_time);";
                        return [4 /*yield*/, this.connection.execute(query)];
                    case 1:
                        rows = _a.sent();
                        return [2 /*return*/, rows];
                }
            });
        });
    };
    AccidentsRepository.prototype.getAccidentsDaysOfWeekDistribution = function (filterQuery, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var query, rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * , COUNT('^') as count from (SELECT DATE_FORMAT(start_time, '%W') as dayOfWeek FROM accidents " + filterQuery + " ORDER BY start_time DESC LIMIT " + limit + ") days group by 1";
                        return [4 /*yield*/, this.connection.execute(query)];
                    case 1:
                        rows = _a.sent();
                        return [2 /*return*/, rows];
                }
            });
        });
    };
    AccidentsRepository.prototype.getAccidentsPointsOfInterestDistribution = function (filterQuery, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var query, rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select *, Count('^') as count from                                    (select if(CONVERT(point_of_interest USING utf8mb4) ='', 'None', point_of_interest) as pointOfInterest \n                                     from converted_points_of_interest c inner join accidents on c.id = accidents.id " + filterQuery + " order by start_time DESC limit " + limit + ") as points\n                               group by 1 order by 1";
                        return [4 /*yield*/, this.connection.execute(query)];
                    case 1:
                        rows = _a.sent();
                        return [2 /*return*/, rows];
                }
            });
        });
    };
    AccidentsRepository.prototype.getAccidentsSeverityDistribution = function (filterQuery, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var query, rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT *, Count('^') as count FROM (select severity from accidents " + filterQuery + " order by start_time DESC limit " + limit + ") as severity group by 1 order by 1";
                        return [4 /*yield*/, this.connection.execute(query)];
                    case 1:
                        rows = _a.sent();
                        return [2 /*return*/, rows];
                }
            });
        });
    };
    AccidentsRepository.prototype.getAccidentsStateDistribution = function (filterQuery, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var query, rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * , Count('^') as count FROM (select state from accidents " + filterQuery + " order by start_time DESC limit " + limit + ") as states group by 1 order by 1";
                        return [4 /*yield*/, this.connection.execute(query)];
                    case 1:
                        rows = _a.sent();
                        return [2 /*return*/, rows];
                }
            });
        });
    };
    AccidentsRepository.prototype.getAccidentsTimeOfDayDistribution = function (filterQuery, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var query, rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT * , Count('^') as count FROM\n                               (select getTimeOfDay(start_time) as timeOfDay from accidents " + filterQuery + " order by start_time DESC limit " + limit + ") as timeOfDay group by 1";
                        return [4 /*yield*/, this.connection.execute(query)];
                    case 1:
                        rows = _a.sent();
                        return [2 /*return*/, rows];
                }
            });
        });
    };
    AccidentsRepository.prototype.getAccidentsWeatherCondition = function (filterQuery, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var query, rows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select * , Count('^') as count from                               (select if(weather_condition='', 'No details', weather_condition) as weatherCondition                              from accidents " + filterQuery + " order by start_time DESC limit " + limit + " ) as weather group by 1";
                        return [4 /*yield*/, this.connection.execute(query)];
                    case 1:
                        rows = _a.sent();
                        return [2 /*return*/, rows];
                }
            });
        });
    };
    AccidentsRepository.prototype.getAccidentsCoordinates = function (filterQuery, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var query, coordinates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT start_lat, start_lng, severity FROM accidents " + filterQuery + " ORDER BY start_time DESC LIMIT " + limit;
                        return [4 /*yield*/, this.connection.execute(query)];
                    case 1:
                        coordinates = _a.sent();
                        return [2 /*return*/, coordinates];
                }
            });
        });
    };
    AccidentsRepository.prototype.getAccidentsLocationInfo = function (filterQuery, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var query, points;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "SELECT id, start_lat, start_lng, state, severity FROM accidents " + filterQuery + " ORDER BY start_time DESC LIMIT " + limit;
                        return [4 /*yield*/, this.connection.execute(query)];
                    case 1:
                        points = _a.sent();
                        return [2 /*return*/, points];
                }
            });
        });
    };
    AccidentsRepository.prototype.getAccidentsDetails = function (filterQuery, page, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var query, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "select accidents.id as \"id\", date_format(accidents.start_time, \"%d/%m/%Y\") as \"date\", date_format(accidents.start_time, \"%T\") as \"time\",        accidents.timezone as \"timezone\", accidents.severity as \"severity\", accidents.state as \"state\" ,        concat_ws(', ', accidents.start_lng , accidents.start_lat,  accidents.number,  accidents.street, accidents.city, accidents.state, accidents.zipcode ) as \"exact_location\", description as \"description\",         (select if(CONVERT(point_of_interest USING utf8mb4)='', \"None\", point_of_interest) from converted_points_of_interest c where accidents.id=c.id) as \"point_of_interest\",        if(weather_condition=\"\", \"No information\", weather_condition) as \"weather_condition\",        concat('Temperature: ',temperature,', Pressure: ',pressure,', Humidity: ',humidity,', Wind speed: ',wind_speed) as \"weather_details\",        tmc as \"traffic_message_canal\", source as \"source\"        from accidents " + filterQuery + " order by start_time desc limit " + page * limit + ", " + limit + ";";
                        return [4 /*yield*/, this.connection.execute(query)];
                    case 1:
                        info = _a.sent();
                        return [2 /*return*/, info];
                }
            });
        });
    };
    return AccidentsRepository;
}());
exports.AccidentsRepository = AccidentsRepository;
