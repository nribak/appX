import {Controller, RequestWrapper} from "../../controllers/types";
import {Request, Response} from "express";
import ExtendedRequest from "./middlewares/extended-request";

export default function makeExpressCallback(controller: Controller): (req: Request, res: Response) => void {
    return async (req, res) => {
        const extended = req as ExtendedRequest;
        const requestWrapper: RequestWrapper = {
            body: extended.body,
            query: extended.query,
            params: extended.params,
            headers: extended.headers,
            payload: extended.payload
        }
        const {json, statusCode} = await controller(requestWrapper);
        res.statusCode = statusCode;
        res.json(json);
    }
}
