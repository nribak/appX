import makeServer from "./server";
import makeOrdersRouter from "./routers/vehicle-router";
import vehicleJob from "./job";
import createSockerServer from "./socket-server";

const server = makeServer();
const httpServer = createSockerServer(server);

server.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})
const router = makeOrdersRouter()
const [kind, port] = process.argv.slice(2);
server.use('/vehicles', router);

httpServer.listen(parseInt(port), () => console.log('listening on port', port));

vehicleJob(kind);
