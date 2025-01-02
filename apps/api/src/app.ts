import express, { NextFunction, Request, Response } from "express";
import { ApiError } from "./utils/ApiError";
import { ApiResponse } from "./utils/ApiResponse";

const app = express();
app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;
  const response = ApiResponse.failure(err.message, err.details);
  res.status(statusCode).json(response);
});

app.get("/", (req, res) => {
  res.send("hrkki");
});

export default app;
