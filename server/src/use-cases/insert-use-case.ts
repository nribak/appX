import {UseCase} from "./types";
import Vehicle from "../entities/vehicle";
import {VehicleDBTransactions} from "../data-access/vehicles-data-source";
import {makeVehicle} from "../entities";
import {appListeners} from "../listeners";
import Settings from "../app/settings";

export type InsertUseCase = UseCase<any, Vehicle>;

export default function makeInsertUseCase(db: VehicleDBTransactions): InsertUseCase {
    const kind = Settings.kind;
    return async (attr) => {
        const vehicle = makeVehicle(attr);
        await db.createVehicle(vehicle);
        if(kind === vehicle.kind)
            appListeners.forEach(listener => listener(vehicle));
        return vehicle;
    }
}
