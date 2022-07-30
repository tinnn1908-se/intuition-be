import { Router } from 'express'
import UserController from '../controllers/user.controller';
const userRouter = Router();
userRouter.put('/updateUser', UserController.updateUser);
export default userRouter;