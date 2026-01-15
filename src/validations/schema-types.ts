import type z from "zod";
import type { CreateTicketSchema } from "./create-ticket-schema";


export type CreateTicketSchemaType = z.infer<typeof CreateTicketSchema>