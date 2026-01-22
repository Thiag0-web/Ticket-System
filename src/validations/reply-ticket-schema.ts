import z from "zod";

export const ReplyTicketSchema = z.object({
    replyMessage: z.string().trim().min(1, "Escreva sua resposta ao Ticket...")
})