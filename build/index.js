"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
var PORT = 3000;
var foodTimetable = {
    breakfast: 'tea',
    lunch: 'sandwich',
    dinner: 'vegetable',
};
app.get('/', function (req, res) {
    res.status(200).json(foodTimetable);
});
app.post('/', function (req, res) {
    console.log(req.body);
    var data = Object.keys(req.query)[0];
    var meal;
    if (data === 'breakfast') {
        meal = req.query.breakfast;
        foodTimetable.breakfast = meal;
    }
    else if (data === 'lunch') {
        meal = req.query.lunch;
        foodTimetable.lunch = meal;
    }
    if (data === 'dinner') {
        meal = req.query.dinner;
        foodTimetable.dinner = meal;
    }
    try {
        res.status(200).json(foodTimetable);
    }
    catch (error) {
        console.log(error);
        res.send('You have entered an invalid format');
    }
});
app.put('/:id', function (req, res) {
    res.send('update data on this endpoint');
});
app.delete('/:id', function (req, res) {
    res.send('delete data on this endpoint');
});
app.listen(PORT, function () { return console.log("app is listening on port ".concat(PORT)); });
