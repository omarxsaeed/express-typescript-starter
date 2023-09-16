import { Request, Response } from "express";
import check from "./health.service";
import { sendSuccessResponse } from "../../utils/respsonse";

const healthCheck = (req: Request, res: Response) => {
  const health = check();
  return sendSuccessResponse(200, health, res);
};

export default healthCheck;
