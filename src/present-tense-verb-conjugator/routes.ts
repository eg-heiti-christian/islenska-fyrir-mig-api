
import express, { Request, Response } from 'express';
const router = express.Router();

router.get("/status", (request: Request, response: Response) => {
    const status = {
        "Status": "Running"
    };
    response.send(status);
});

export default router;

// https://github.com/postmanlabs/e-commerce-store-express/tree/master/storage