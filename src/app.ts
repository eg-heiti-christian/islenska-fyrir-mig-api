import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

//For env File 
dotenv.config();

// express routes
import PresentTenseVerbConjugatorRoutes from './present-tense-verb-conjugator/routes';

const app = express();

app.use(morgan("tiny"));
app.use(cors());

app.use(express.json());

app.use('/', PresentTenseVerbConjugatorRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("Server Listening on PORT:", port);
});
  