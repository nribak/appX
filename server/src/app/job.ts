import {insertUseCase} from "../use-cases";

export default function vehicleJob(kind: string, frequency: number) {
    console.log(frequency);
    setInterval( () => {
        const plate = Date.now().toString();
        insertUseCase({plate, color: 'red', kind});
    }, frequency * 1000);
}
