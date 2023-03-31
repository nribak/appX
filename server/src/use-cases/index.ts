import makeInsertUseCase from "./insert-use-case";
import {vehiclesDataSource} from "../data-access";
import makeGetAllUseCase from "./get-all-use-case";


export const insertUseCase = makeInsertUseCase(vehiclesDataSource);
export const getAllUseCase = makeGetAllUseCase(vehiclesDataSource);
