import { NextFunction, Request, Response } from "express";

type AsyncRequestHandler<T> = (req: Request, res: Response, next: NextFunction) => Promise<T>;

export const asyncWrapper =
  <T>(fn: AsyncRequestHandler<T>) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);
