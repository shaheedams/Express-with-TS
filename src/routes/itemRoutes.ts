import { Router } from 'express';
import { createItem, getAllItems } from '../controllers/itemControllers';

const userRouter = Router();

userRouter.get('/', getAllItems);
userRouter.post('/', createItem);

export default userRouter;
