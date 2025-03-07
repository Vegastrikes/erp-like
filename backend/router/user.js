import { Router } from "express";
import { login, create } from "../controller/user.js";

const userRouter = Router();

userRouter.post('/login', login);
// userRouter.put('/', create);

export default userRouter;