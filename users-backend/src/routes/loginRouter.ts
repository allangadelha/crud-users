import express from "express";
import LoginController from "../controllers/LoginController";

const loginRouter = express.Router();

loginRouter.post('/login', LoginController.login);

export { loginRouter };