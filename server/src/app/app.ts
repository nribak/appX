import makeServer from "./server";
import makeOrdersRouter from "./routers/vehicle-router";
import vehicleJob from "./job";
import createSockerServer from "./socket-server";
import Settings from "./settings";

const server = makeServer();
const httpServer = createSockerServer(server);

server.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})
const router = makeOrdersRouter()

server.use('/vehicles', router);

httpServer.listen(Settings.port, () => console.log('listening on port', Settings.port));

vehicleJob(Settings.kind, Settings.frequency);
