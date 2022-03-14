import express, { Request, Response } from 'express';
import StudentsRoute from './handlers/students';
const app = express();
const PORT = 3000;
app.use(express.json()); // without this line of code, req.body returns undefined
StudentsRoute(app);

app.get('*', (req: Request, res: Response) => {
  res
    .status(404)
    .json({ Message: `You have tried to access a route that does not exist.` });
});

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
