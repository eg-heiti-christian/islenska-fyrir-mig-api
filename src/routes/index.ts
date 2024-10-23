import express, { Request, Response } from 'express';
const router = express.Router();

import VerbRouter from './verbs';

router.use('/verbs', VerbRouter);

export default router;