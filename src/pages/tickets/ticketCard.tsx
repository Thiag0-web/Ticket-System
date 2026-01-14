import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageCircle} from "lucide-react";
import { Link } from "react-router-dom";
import { ReplyTicketCard } from "./replyTicketCard";
import { Activity, useState } from "react";
import type { Ticket } from "@/data";
import { format } from "date-fns"
import { TICKET_TYPE_SELECT } from "@/constants/ticket-config";
import { TicketStatus } from "@/components/ui/ticketStatus";

interface TicketCardProps{
  ticket: Ticket
}

export function TicketCard({ticket} :TicketCardProps) {
  const [openReplies, setOpenReplies] = useState(false);

  return (
    <div className="border rounded p-4 pb-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 ">
          <TicketStatus variant={ticket.status}/>
          <h4 className="font-semibold">Ticket - {ticket.ticketId}</h4>
          <Badge>{TICKET_TYPE_SELECT[ticket.ticketType]}</Badge>
        </div>

        <div className="flex items-center gap-2">
          <Avatar className="size-7">
            <AvatarImage src={ticket.userImageUrl} />
            <AvatarFallback>{ticket.userInitials}</AvatarFallback>
          </Avatar>
          <span className="text-muted-foreground">{ticket.username}</span>
        </div>
      </div>

      <div className="my-4">
        <span className="font-medium text-xs text-muted-foreground">
          Postado ás { format(ticket.createdAt, "HH:mm")}
        </span>

        <h3 className="text-sm font-medium my-1">
          {ticket.title}
        </h3>
        <p className="text-xs font-medium text-muted-foreground line-clamp-4">
          {ticket.description}
        </p>
      </div>

      <Separator />
      <div className="flex items-center justify-between mt-2">
        <div>
          <Button
            disabled={!ticket.replies?.length}
            size="sm"
            variant="ghost"
            className="gap-1"
            onClick={() => setOpenReplies((prev) => !prev)}
          >
            <MessageCircle />
            <span className="text-sm">{ticket.replies?.length ?? "Sem repostas"}</span>
          </Button>
        </div>
        <Button asChild variant="link" size="sm">
          <Link to={`/tickets/${ticket.ticketId}`}>Open Ticket</Link>
        </Button>
      </div>

      <Activity mode={ticket.replies && openReplies ? "visible" : "hidden"}>
        <Separator className="my-4" />
        <div className="space-y-4 mb-4">
        {ticket.replies?.map((replie) => (
          <ReplyTicketCard key={replie.id} ticket={replie}/>
        ))} 
        </div>
      </Activity>
    </div>
  );
}
