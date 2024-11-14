import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction): void => {
    try {
        const token = req.header("authorization");

        if (!token) {            
            res.status(401).json({ err: "token mast be provider" });
            return;
        }
        const payload = jwt.verify(token, process.env.JWT_SECRET as string);
        (req as any).user = payload
        next()
    } catch (err) {
        res.status(401).json(err as JsonWebTokenError)
    }
};
