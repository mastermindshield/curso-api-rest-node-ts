import { Router } from 'express'
import { StatusCodes } from 'http-status-codes';
 
const router = Router();

router.get('/', (req, res) => {
    return res.send('Hello World!');
})

router.post('/test', (req, res) => {
    return res.status(StatusCodes.ACCEPTED).json({ message: 'Test' });
})

export { router }; 