import makeCreateVehicleController from "./create-vehicle-controller";
import {getAllUseCase, insertUseCase} from "../use-cases";
import makeGetAllController from "./get-all-controller";

export const createVehicleController = makeCreateVehicleController(insertUseCase);
export const getAllVehiclesController = makeGetAllController(getAllUseCase);
