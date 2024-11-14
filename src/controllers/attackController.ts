import { Request, Response } from "express";
import { getAllAttackFromDb } from "../services/attackServise";

export const getAllAttack = async (req: Request, res: Response) => {
    try {
        const allAttack = await getAllAttackFromDb()
        res.status(200).json(allAttack)
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};