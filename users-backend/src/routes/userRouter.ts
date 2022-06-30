import express from "express";
import UserController from "../controllers/UserController";

const userRouter = express.Router();

userRouter.get('/users', UserController.findAll);

userRouter.get('/users/:id', UserController.findOne);

userRouter.post('/users', UserController.create);

userRouter.put('/users/:id', UserController.update);

userRouter.delete('/users/:id', UserController.destroy);

export { userRouter };