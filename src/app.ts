import express from "express";
import cors from "cors";
import routes from "./loaders/routes";
import helmet from "helmet";
import mainErrorHandler from "./loaders/errorHandler";

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use("/api", routes);

mainErrorHandler(app);

export default app;
