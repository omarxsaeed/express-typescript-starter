import { Application, NextFunction, Request, Response } from "express";
import { CustomError, handleError } from "../utils/errors";

const mainErrorHandler = (app: Application) => {
  app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
    handleError(err, res, next);
  });
};

export default mainErrorHandler;
