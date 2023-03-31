import axios from "axios";
export default function makeServerListener(target: string): (item: any) => void {
    const instance = axios.create({baseURL: target});
    return async (item) => {
        try {
            await instance.post('/', item)
        } catch (e) {
            console.log('server is offline');
        }
    }
}
