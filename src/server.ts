import http from "http";
import app from "./app";
import config from "./config";

const server = http.createServer(app);

const PORT = config.server.PORT;

server.listen(PORT, () => {
  console.log(`Server listening on on http://${config.server.HOST}:${PORT}`);
});

export default server;
