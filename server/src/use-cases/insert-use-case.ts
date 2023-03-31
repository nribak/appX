import {UseCase} from "./types";
import Vehicle from "../entities/vehicle";
import {VehicleDBTransactions} from "../data-access/vehicles-data-source";
import {makeVehicle} from "../entities";
import {appListeners} from "../listeners";

export type InsertUseCase = UseCase<any, Vehicle>;

export default function makeInsertUseCase(db: VehicleDBTransactions): InsertUseCase {
    const [kind] = process.argv.slice(2);

    return async (attr) => {
        const vehicle = makeVehicle(attr);
        await db.createVehicle(vehicle);
        if(kind === vehicle.kind)
            appListeners.forEach(listener => listener(vehicle));
        return vehicle;
    }
}
