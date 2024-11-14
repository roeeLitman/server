import { Request, Response } from "express";
import { getDetailsFromDb } from "../services/user";

export const getDetails = async (req: Request, res: Response) => {
    try {
        const details = await getDetailsFromDb((req as any).user._id);
        res.status(200).json(details)
    } catch (err) {
        console.log(err);
        res.status(400).json((err as Error).message);
    }
}