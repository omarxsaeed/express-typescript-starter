import { NextFunction, Response } from "express";
import { sendFailureResponse } from "./respsonse";

export class CustomError extends Error {
  constructor(public statusCode: number, public message: string, public errors?: any) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export const handleError = (err: CustomError, res: Response, next: NextFunction) => {
  const { message, statusCode = 500, errors = {} } = err;
  sendFailureResponse(statusCode, message, errors, res);
};
