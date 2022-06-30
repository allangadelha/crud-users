import { db } from './database/db';
import express, { json } from 'express';
import { userRouter } from './routes/userRouter';

const app = express();
const port = process.env.PROJECT_PORT || 3001;

app.use(json());
app.use(userRouter)

app.listen(port, async () => {
    await db.sync();
    console.log(`Rodando ${process.env.PROJECT_NAME} na porta ${port}`);
});