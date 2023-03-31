import {insertUseCase} from "../use-cases";

export default function vehicleJob(kind: string) {
    setInterval( () => {
        const plate = Date.now().toString();
        insertUseCase({plate, color: 'red', kind});
    }, 5000);
}
