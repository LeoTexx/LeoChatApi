import { Request, Response, NextFunction } from "express";

export function ensureIsMobile(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    request.isMobile = true;
    return next();
  } catch (error) {
    return response.status(400).json({
      errorCode: "Impossible to set isMobile",
    });
  }
}
