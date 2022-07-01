import { db } from './database/db';
import express, { json } from 'express';
import { userRouter } from './routes/userRouter';
import { loginRouter } from './routes/loginRouter';
import cors from 'cors';

const app = express();
const port = process.env.PROJECT_PORT || 3001;

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Content-Type", "application/json");
	//Quais são os métodos que a conexão pode realizar na API
    res.setHeader("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(json());
app.use(userRouter);
app.use(loginRouter);

app.listen(port, async () => {
    await db.sync();
    console.log(`Rodando ${process.env.PROJECT_NAME} na porta ${port}`);
});