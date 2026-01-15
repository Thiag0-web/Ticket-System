import { ETicketType } from "@/enums/ticket-type";
import { z } from "zod";

export const CreateTicketSchema = z.object({
  ticketType: z.enum(ETicketType, "Tipo invalido"),
  ticketTitle: z.string().trim().min(1, "Titulo Obrigatorio"),
  ticketMessage: z
    .string()
    .trim()
    .min(20, "Minimo de 20 caracteres!")
    .max(500, "Maximo de 500 caracteres"),
});
