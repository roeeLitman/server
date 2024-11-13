import { Request, Response } from "express";
import { initDataBase } from "../services/authService";

export const sid = async (req: Request, res: Response) => {
    try {
        await initDataBase();
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};
