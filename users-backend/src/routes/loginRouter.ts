import express from "express";
import LoginController from "../controllers/LoginController";
import cors from "cors";

const loginRouter = express.Router();

loginRouter.post('/login', cors(), LoginController.login);

export { loginRouter };