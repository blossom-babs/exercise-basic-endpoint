import { Request, Response, Application } from 'express';

type Student = {
  id: number;
  name: string;
  age: number;
  subjects: string[];
  grade: string;
};

const students = [
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

const index = (req: Request, res: Response) => {
  try {
    if (students.length < 1) {
      res.status(200).json({ message: `You have no students data` });
    } else {
      res.status(200).json(students);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const show = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const value = students.filter((data) => {
      if (data.id === Number(id)) return data;
    });

    if (students.length < 1) {
      res.status(200).json({ message: `You have no student with id ${id}` });
    } else {
      res.status(200).json(value);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const update = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const dataValue = req.body;
    const value = students.filter((data) => {
      if (data.id === Number(id)) {
        data.subjects = dataValue.subjects;
        return data;
      }
    });
    if (value.length < 1) {
      res.status(404).json({ message: `Student with id ${id} does not exist` });
    } else {
      res.status(200).json(value);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const destroy = (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const value = students.filter((data) => {
      if (data.id !== Number(id)) {
        return data;
      }
    });
    if (value.length < 1) {
      res.status(404).json({ message: `Student with id ${id} does not exist` });
    } else {
      res.status(200).json(value);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

const create = (req: Request, res: Response) => {
  try {
    const student: Student = req.body;
    students.push(student);
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json(error);
  }
};

const StudentsRoute = (app: Application) => {
  app.get('/students', index);
  app.get('/students/:id', show);
  app.post('/students', create);
  app.put('/students/:id', update);
  app.delete('/students/:id', destroy);
};

export default StudentsRoute;
