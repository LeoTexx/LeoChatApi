import prismaClient from "../../prisma";
import { webSocket } from "../app";

class CreateMessageService {
  async execute(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: true,
      },
    });

    const infoWebSocket = {
      text: message.text,
      user_id: message.user_id,
      created_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
    };
    webSocket.emit("new_message", infoWebSocket);

    return message;
  }
}

export { CreateMessageService };
