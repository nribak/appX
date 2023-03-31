import makeServerListener from "./server-listener";
import {AppListener} from "./types";
import makeSocketListener from "./socket-listener";

const [portY] = process.argv.slice(4);
const serverListener = makeServerListener(`http://localhost:${portY}/vehicles`);
const socketListener = makeSocketListener();
export const appListeners: AppListener[] = [serverListener, socketListener];
