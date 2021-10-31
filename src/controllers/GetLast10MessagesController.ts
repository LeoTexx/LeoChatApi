import { Request, Response } from "express";
import { GetLast10MessagesService } from "../services/GetLast10MessagesService";

class GetLast10MessagesController {
  async handle(request: Request, response: Response) {
    const service = new GetLast10MessagesService();

    const result = await service.execute();

    return response.json(result);
  }
}

export { GetLast10MessagesController };
