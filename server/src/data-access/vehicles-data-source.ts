import DBAccess from "./db-access";
import Vehicle from "../entities/vehicle";

export interface VehicleDBTransactions {
    createVehicle: (vehicle: Vehicle) => Promise<boolean>
    getAll: () => Promise<Vehicle[]>
}

export default function makeVehiclesDataSource(makeDataSource: () => DBAccess<Vehicle>): VehicleDBTransactions {
    return Object.freeze({
        createVehicle: (vehicle: Vehicle) => {
            const ds = makeDataSource();
            console.log('inset', vehicle);
            return ds.insert(vehicle.plate, vehicle);
        },
        getAll: () => {
            const ds = makeDataSource();
            return ds.getAll();
        }
    });
}
