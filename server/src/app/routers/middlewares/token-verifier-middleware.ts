import {NextFunction, Request, Response} from "express";
import jwt from 'jsonwebtoken';
import {TokenError} from "../errors";
import ExtendedRequest from "./extended-request";

export default function tokenVerifierMiddleware(req: Request, res: Response, next: NextFunction) {
    const extended = req as ExtendedRequest;
    const auth = extended.headers['authorization'];
    if(typeof auth === 'string') {
        jwt.verify(auth, process.env.JWT_KEY!, (err, decoded) => {
            if(err)
                throw new TokenError();
            else {
                extended.payload = decoded;
                next();
            }
        });
    } else throw new TokenError();
}
