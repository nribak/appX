export default interface Vehicle {
    plate: string,
    color: string,
    kind: 'car'|'motorcycle'
}

export function buildMakeVehicle(): (attr: any) => Vehicle {
    return ({plate, color, kind}) => {
        const vehicle: Vehicle = {plate, color, kind};
        //notify all
        return vehicle;
    }
}
