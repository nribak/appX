import {useEffect, useState} from "react";
import { io } from "socket.io-client";

export default interface Vehicle {
    plate: string,
    color: string,
    kind: 'car'|'motorcycle'
}

export function useSocket(host: string) {
    const [state, setState] = useState<Vehicle[]>([]);
    useEffect(() => {
        const socket = io('ws://' + host);
        socket.on('create', (event) => {
            setState(prevState => [event, ...prevState]);
        })
    }, []);
    return state;
}
