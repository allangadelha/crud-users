import express from 'express';
// import { routers } from './routes/routers';

const app = express();
const port = 3000;

const routers = express.Router();
app.use(express.static("public"));

routers.get('/', async (req, res) => {
    res.send("Hello word!");
});


app.listen(port, async () => {
    console.log(`Rodando ${process.env.PROJECT_NAME} na porta ${port}`);
});