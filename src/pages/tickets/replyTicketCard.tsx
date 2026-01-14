import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { ReplyTicket } from "@/data";
import { format } from "date-fns";

interface ReplyTicketCardProps {
  ticket: ReplyTicket;
}

export function ReplyTicketCard({ ticket }: ReplyTicketCardProps) {
  return (
    <div className="border rounded-sm p-4 space-y-2">
      <div className="flex items-center gap-2">
        <Avatar className="size-7">
          <AvatarImage src={ticket.userImageUrl} />
          <AvatarFallback>{ticket.userInitials}</AvatarFallback>
        </Avatar>
        <span className="text-muted-foreground">{ticket.username}</span>
        <span className="font-medium text-xs text-muted-foreground">
          Postado ás {format(ticket.createdAt, "HH:mm")}
        </span>
      </div>
      <p className="text-xs font-medium text-muted-foreground ml-9">
        {ticket.replyMessage}
      </p>
    </div>
  );
}
