import { Request, Response } from 'express';
import { CreateMEssageService } from '../services/CreateMessageService';


class CreateMessageController {
  async handle(request: Request, response: Response) {

    const { message } = request.body;
    const { user_id} = request;

    const service = new CreateMEssageService();

    const result = await service.execute(message, user_id);

    return response.json(result);

  }
}

export { CreateMessageController }