"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var students_1 = __importDefault(require("./handlers/students"));
var app = (0, express_1.default)();
var PORT = 3000;
app.use(express_1.default.json()); // without this line of code, req.body returns undefined
(0, students_1.default)(app);
app.get('*', function (req, res) {
    res
        .status(404)
        .json({ Message: "You have tried to access a route that does not exist." });
});
app.listen(PORT, function () { return console.log("app is listening on port ".concat(PORT)); });
