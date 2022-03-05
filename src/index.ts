import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = 3000;

interface Food {
  breakfast: string;
  lunch: string;
  dinner: string;
}
let foodTimetable: Food = {
  breakfast: 'tea',
  lunch: 'sandwich',
  dinner: 'vegetable',
};

app.get('/', (req: Request, res: Response) => {
  res.status(200).json(foodTimetable);
});

app.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  let data = Object.keys(req.query)[0];
  let meal;
  if (data === 'breakfast') {
    meal = req.query.breakfast as string;
    foodTimetable.breakfast = meal;
  } else if (data === 'lunch') {
    meal = req.query.lunch as string;
    foodTimetable.lunch = meal;
  }
  if (data === 'dinner') {
    meal = req.query.dinner as string;
    foodTimetable.dinner = meal;
  }

  try {
    res.status(200).json(foodTimetable);
  } catch (error) {
    console.log(error);
    res.send('You have entered an invalid format');
  }
});

app.put('/:id', (req: Request, res: Response) => {
  res.send('update data on this endpoint');
});

app.delete('/:id', (req: Request, res: Response) => {
  res.send('delete data on this endpoint');
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
