import type z from "zod";
import type { CreateTicketSchema } from "./create-ticket-schema";
import type { ReplyTicketSchema } from "./reply-ticket-schema";


export type CreateTicketSchemaType = z.infer<typeof CreateTicketSchema>
export type ReplyTicketSchemaType = z.infer<typeof ReplyTicketSchema>