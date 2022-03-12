import express, { Request, Response } from 'express';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;

type Student = {
  id: number;
  name: string;
  age: number;
  subjects: string[];
  grade: string;
};

let students = [
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

app.get('/', (req: Request, res: Response) => {
  try {
    if (students.length < 1) {
      res.status(200).json({ message: `You have no students data` });
    } else {
      res.status(200).json(students);
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post('/', (req: Request, res: Response) => {
  try {
    const student: Student = req.body;
    students.push(student);
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.put('/:id', (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const value = students.filter((data) => {
      if (data.id === Number(id)) {
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
});

app.delete('/:id', (req: Request, res: Response) => {
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
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
