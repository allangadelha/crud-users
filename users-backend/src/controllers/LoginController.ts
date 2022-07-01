import { UserModel } from './../database/models/UserModel';
import { Request, Response } from "express";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

class LoginController {

    async login(req:Request, res:Response) {
        const { email, password } = req.body;

        const user = await UserModel.findOne({
            where: {
                email
            }
        });

        if(!user) {
            return res.status(404).json({ error: "Usuário não encontrado"});
        }

        const isValuePassword = await compare(password, user['password']);

        if(!isValuePassword) {
            return res.status(404).json({ error: "Usuário não encontrado"});
        }

        const token = sign({ id: user['id']}, process.env.SECRET, { expiresIn: parseInt(process.env.EXPIRE_TOKEN) });
        

        return res.status(201).json({
            sucess: "Login efetuado com sucesso", 
            name: user['name'],
            email: user['email'],
            token
        });
    }
}

export default new LoginController();