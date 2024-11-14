import { Request, Response } from "express";
import { getAllOrganizationFromDb } from "../services/organizationService";

export const getAllOrganization = async (req: Request, res: Response) => {
    try {
        const lisrOfOrganization = await getAllOrganizationFromDb();
        res.status(200).json(lisrOfOrganization)
    } catch (err) {
        console.log(err);
        res.status(400).json((err as Error).message);
    }
}
