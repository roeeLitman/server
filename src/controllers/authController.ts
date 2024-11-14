import { Request, Response } from "express";
import { createNewUser, initDataBase, userLogin } from "../services/authService";

export const sid = async (req: Request, res: Response) => {
    try {
        await initDataBase();
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};


export const register = async (req: Request, res: Response) => {
    try {
        const newUser = await createNewUser(req.body);
        res.status(200).json(newUser)
    } catch (err) {
        console.log(err);
        res.status(400).json((err as Error).message);
    }
};
export const login = async (req: Request, res: Response) => {
    try {
        const userWithToken = await userLogin(req.body);
        res.status(200).json(userWithToken)
    } catch (err) {
        console.log(err);
        res.status(400).json((err as Error).message);
    }
};