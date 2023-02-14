import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from 'cors'
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Healthy");
});


const PORT = process.env.PORT || 8000;

app.use(cors({origin:"http://localhost:5173/"}))

app.get("/test",(req:Request,res:Response) => {
  res.sendStatus(200);
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
