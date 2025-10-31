import { Router } from "express";
import { Cart, Login, Register } from "../controllers/user.js";

const userRouter = Router()

userRouter.post('/register',Register)

userRouter.post('/login',Login)

userRouter.post('/cart',Cart)

export default userRouter;