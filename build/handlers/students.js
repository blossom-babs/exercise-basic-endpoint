"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var index = function (req, res) {
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
};
var show = function (req, res) {
    try {
        var id_1 = req.params.id;
        var value = students.filter(function (data) {
            if (data.id === Number(id_1))
                return data;
        });
        if (students.length < 1) {
            res.status(200).json({ message: "You have no student with id ".concat(id_1) });
        }
        else {
            res.status(200).json(value);
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
};
var update = function (req, res) {
    try {
        var id_2 = req.params.id;
        var dataValue_1 = req.body;
        var value = students.filter(function (data) {
            if (data.id === Number(id_2)) {
                data.subjects = dataValue_1.subjects;
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
};
var destroy = function (req, res) {
    try {
        var id_3 = req.params.id;
        var value = students.filter(function (data) {
            if (data.id !== Number(id_3)) {
                return data;
            }
        });
        if (value.length < 1) {
            res.status(404).json({ message: "Student with id ".concat(id_3, " does not exist") });
        }
        else {
            res.status(200).json(value);
        }
    }
    catch (error) {
        res.status(400).json(error);
    }
};
var create = function (req, res) {
    try {
        var student = req.body;
        console.log(student);
        console.log(req.body);
        students.push(student);
        res.status(200).json(students);
    }
    catch (error) {
        res.status(400).json(error);
    }
};
var StudentsRoute = function (app) {
    app.get('/students', index);
    app.get('/students/:id', show);
    app.post('/students', create);
    app.put('/students/:id', update);
    app.delete('/students/:id', destroy);
};
exports.default = StudentsRoute;
