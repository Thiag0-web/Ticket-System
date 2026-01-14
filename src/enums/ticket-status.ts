export const ETicketStatus = {
  NEW_TICKET: 1,
  IN_PROGRESSTICKET: 2,
  RESOLVEDTICKET: 3,
} as const;

export type TicketStatusValue =
  (typeof ETicketStatus)[keyof typeof ETicketStatus];  

  
export type TicketStatusKey = keyof typeof ETicketStatus;
