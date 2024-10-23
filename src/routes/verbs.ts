
import express, { Request, Response } from 'express';
import { VerbServices } from '../services';

const router = express.Router();

router.get("/present-tense", async (request: Request, response: Response) => {
    const verbs = await VerbServices.GetAll();
    response.send(verbs);
});

export default router;

// https://github.com/postmanlabs/e-commerce-store-express/tree/master/storage