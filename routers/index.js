import {authRouter} from 'express';
import {authRouter} from './authRouter.router.js';

const apiRouter = Router();

apiRouter.use('/auth',authRouter);

export {apiRouter};
