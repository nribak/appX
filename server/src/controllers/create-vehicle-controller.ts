import {InsertUseCase} from "../use-cases/insert-use-case";
import {Controller} from "./types";

export default function makeCreateVehicleController(useCase: InsertUseCase): Controller {
    return async (req) => {
        const vehicle = await useCase(req.body);
        return {
            statusCode: 201,
            json: vehicle
        }
    }
}
