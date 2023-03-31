import {socketIO} from "../app/socket-server";

export default function makeSocketListener(): (item: any) => void {
    return (item) => {
        socketIO?.emit('create', item);
    }
}
