import { NextFunction, Response } from "express";
import { sendFailureResponse } from "./respsonse";

export class CustomError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public errors?: Error[]
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export const handleError = (
  err: CustomError,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  const { message, statusCode = 500, errors = [] } = err;
  sendFailureResponse(statusCode, message, errors, res);
};
