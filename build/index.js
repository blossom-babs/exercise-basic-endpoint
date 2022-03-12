"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
var PORT = 3000;
var students = [
    {
        id: 1,
        name: 'Blossom Babalola',
        age: 21,
        subjects: ['Web3', 'DSA', 'System Design'],
        grade: 'A1',
    },
    {
        id: 2,
        name: 'Breakthrough Babalola',
        age: 13,
        subjects: ['Yoruba', 'Literature', 'Fine-arts'],
        grade: 'A1',
    },
    {
        id: 3,
        name: 'Treasure Babalola',
        age: 19,
        subjects: ['International relations', 'French'],
        grade: 'A1',
    },
    {
        id: 4,
        name: 'Lulu Babalola',
        age: 1,
        subjects: [],
        grade: 'C4',
    },
];
app.get('/', function (req, res) {
    try {
        if (students.length < 1) {
            res.status(200).json({ message: "You have no students data" });
        }
        else {
            res.status(200).json(students);
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
});
app.post('/', function (req, res) {
    try {
        var student = req.body;
        students.push(student);
        res.status(200).json(students);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
app.put('/:id', function (req, res) {
    try {
        var id_1 = req.params.id;
        var value = students.filter(function (data) {
            if (data.id === Number(id_1)) {
                return data;
            }
        });
        if (value.length < 1) {
            res.status(404).json({ message: "Student with id ".concat(id_1, " does not exist") });
        }
        else {
            res.status(200).json(value);
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
});
app.delete('/:id', function (req, res) {
    try {
        var id_2 = req.params.id;
        var value = students.filter(function (data) {
            if (data.id !== Number(id_2)) {
                return data;
            }
        });
        if (value.length < 1) {
            res.status(404).json({ message: "Student with id ".concat(id_2, " does not exist") });
        }
        else {
            res.status(200).json(value);
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
});
app.listen(PORT, function () { return console.log("app is listening on port ".concat(PORT)); });
