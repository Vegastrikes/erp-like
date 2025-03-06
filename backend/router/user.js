import { Router } from "express";
import { create } from "../controller/user.js";

const userRouter = Router();

userRouter.put('/', create);

export default userRouter;