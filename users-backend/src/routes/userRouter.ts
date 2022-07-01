import express from "express";
import UserController from "../controllers/UserController";
import { AuthMiddleware } from "../middlewares/auth";
import cors from "cors";

const userRouter = express.Router();

userRouter.get('/users', cors(), AuthMiddleware, UserController.findAll);

userRouter.get('/users/:id', cors(), AuthMiddleware, UserController.findOne);

userRouter.post('/users', cors(), AuthMiddleware, UserController.create);

userRouter.put('/users/:id', cors(), AuthMiddleware, UserController.update);

userRouter.delete('/users/:id', cors(), AuthMiddleware, UserController.destroy);

export { userRouter };