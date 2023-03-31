import makeServerListener from "./server-listener";
import {AppListener} from "./types";
import makeSocketListener from "./socket-listener";
import Settings from "../app/settings";

const serverListener = makeServerListener(`http://localhost:${Settings.foreignPort}/vehicles`);
const socketListener = makeSocketListener();
export const appListeners: AppListener[] = [serverListener, socketListener];
