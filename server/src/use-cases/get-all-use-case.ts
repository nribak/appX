import {UseCase} from "./types";
import Vehicle from "../entities/vehicle";
import {VehicleDBTransactions} from "../data-access/vehicles-data-source";

export type GetAllUseCase = UseCase<void, Vehicle[]>;

export default function makeGetAllUseCase(db: VehicleDBTransactions): GetAllUseCase {
    return async () => {
        return db.getAll();
    }
}
