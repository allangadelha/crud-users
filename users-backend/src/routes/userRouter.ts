import express from "express";
import UserController from "../controllers/UserController";
import { AuthMiddleware } from "../middlewares/auth";
import cors from "cors";

const userRouter = express.Router();

userRouter.get('/users', cors(), AuthMiddleware, UserController.findAll);

userRouter.get('/users/:id', AuthMiddleware, UserController.findOne);

userRouter.post('/users', AuthMiddleware, UserController.create);

userRouter.put('/users/:id', AuthMiddleware, UserController.update);

userRouter.delete('/users/:id', AuthMiddleware, UserController.destroy);

export { userRouter };