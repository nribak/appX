import {Router} from "express";
import makeExpressCallback from "./route.callback";
import {createVehicleController, getAllVehiclesController} from "../../controllers";

export default function makeOrdersRouter(): Router {
    const router = Router();

    router.post('/', makeExpressCallback(createVehicleController));
    router.get('/', makeExpressCallback(getAllVehiclesController));
    return router;
}
