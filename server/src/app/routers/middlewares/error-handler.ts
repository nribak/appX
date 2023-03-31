import {NextFunction, Request, Response} from "express";

export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    const {message} = err;
    res.status(404).json({message})
}
