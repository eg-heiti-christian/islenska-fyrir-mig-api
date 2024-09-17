import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

//For env File 
dotenv.config();

// express routes
import Verbs from './verbs/routes';

const app = express();

app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());

app.use('/', Verbs);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});
  