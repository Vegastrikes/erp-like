import { Router } from "express";
import { login, logout, isLoggedIn ,create } from "../controller/user.js";
import { isAuthenticated } from "../middlewares/middlewares.js"

const userRouter = Router();

userRouter.post('/login', login);
userRouter.delete('/logout', logout);
userRouter.get('/isLoggedIn', isAuthenticated, isLoggedIn);
userRouter.put('/', isAuthenticated, create);

export default userRouter;