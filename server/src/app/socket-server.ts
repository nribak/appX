import {Express} from "express";
import {Server} from "socket.io";
import http from "http";

export let socketIO: Server|null = null;
export default function createSockerServer(app: Express) {
    const httpsServer = http.createServer(app);
    socketIO = new Server(httpsServer, {
        cors: {
            origin: "http://localhost:3000"
        }
    });
    return httpsServer;
}
