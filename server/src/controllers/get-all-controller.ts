import {GetAllUseCase} from "../use-cases/get-all-use-case";
import {Controller} from "./types";

export default function makeGetAllController(useCase: GetAllUseCase): Controller {
    return async () => {
        const data = await useCase();
        return {
            statusCode: 200,
            json: data
        }
    }
}
