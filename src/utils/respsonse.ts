import { Response } from "express";

/**
 * Sends a standardized JSON response.
 * @param status Indicates whether the response is successful (true) or not (false).
 * @param message A message describing the response.
 * @param statusCode The HTTP status code to send with the response.
 * @param data The data to include in the response.
 * @param res The Express.js Response object to which the response will be sent.
 */
function respondWith<T>(status: boolean, message: string, statusCode: number, data: T, res: Response) {
  res.status(statusCode).json({
    status,
    message,
    data
  });
}

/**
 * Sends a successful JSON response.
 * @param statusCode The HTTP status code for a successful response.
 * @param data The data to include in the successful response.
 * @param res The Express.js Response object to which the response will be sent.
 */
export function sendSuccessResponse<T>(statusCode: number, data: T, res: Response) {
  respondWith(true, "success", statusCode, data, res);
}

/**
 * Sends a failure JSON response.
 * @param statusCode The HTTP status code for a failure response.
 * @param message A message describing the failure.
 * @param errors Any error or additional data to include in the response.
 * @param res The Express.js Response object to which the response will be sent.
 */
export function sendFailureResponse(statusCode: number, message: string, errors: Error[], res: Response) {
  respondWith(false, message, statusCode, errors, res);
}
