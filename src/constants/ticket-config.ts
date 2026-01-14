import { ETicketStatus, type TicketStatusValue } from "@/enums/ticket-status";
import { ETicketType, type TicketTypeValue } from "@/enums/ticket-type";

export const TICKET_TYPE_SELECT: Record<TicketTypeValue, string> = {
    [ETicketType.BUG]: "Bug",
    [ETicketType.ACCESS]: "Acesso",
    [ETicketType.FEATURE_REQUEST]: "Funcionalidade",
    [ETicketType.SUPORT_TECHNICAL]: "Suporte Tecnico"
}

export const TICKET_STATUS_SELECT: Record<TicketStatusValue, string> = {
    [ETicketStatus.NEW_TICKET]: "Tickets Novos",
    [ETicketStatus.IN_PROGRESSTICKET]: "Tickets em andamento",
    [ETicketStatus.RESOLVEDTICKET]: "Tickets resolvidos",
}