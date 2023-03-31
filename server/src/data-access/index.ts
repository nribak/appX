import makeMemoryRepo from "./repos/memory-repo";
import makeVehiclesDataSource from "./vehicles-data-source";
import Vehicle from "../entities/vehicle";

const memoryDB = makeMemoryRepo<Vehicle>()
export const vehiclesDataSource = makeVehiclesDataSource(memoryDB);
