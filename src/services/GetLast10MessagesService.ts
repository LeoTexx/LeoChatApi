import prismaClient from "../../prisma";

class GetLast10MessagesService {
  async execute() {
    const message = await prismaClient.message.findMany({
      take: 10,
      orderBy: {
        created_at: "desc",
      },
      include: {
        user: true,
      },
    });

    return message;
  }
}

export { GetLast10MessagesService };
