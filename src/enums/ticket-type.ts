export const ETicketType = {
  BUG: 1,
  FEATURE_REQUEST: 2,
  ACCESS: 3,
  SUPORT_TECHNICAL: 4 
} as const;

export type TicketTypeValue =
  (typeof ETicketType)[keyof typeof ETicketType];  

  
export type TicketTypeKey = keyof typeof ETicketType;
