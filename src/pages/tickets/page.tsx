import { SubHeader } from "@/components/subHeader";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { TicketCard } from "./ticketCard";
import { TICKETS_DATA } from "@/data";
import { useState } from "react";
import type { TicketStatusValue } from "@/enums/ticket-status";
import { TICKET_STATUS_SELECT } from "@/constants/ticket-config";
import { TicketStatus } from "@/components/ui/ticketStatus";

export function TicketsPage() {
  const [ticketQuery, setTicketQuery] = useState("");
  const [ticketTypeSelect, setTicketTypeSelect] = useState<
    TicketStatusValue | "all"
  >("all");

  const filteredTickets = () => {
    const query = ticketQuery.toLowerCase();

    return TICKETS_DATA.filter((ticket) => {
      const matchSearch =
        ticket.title.toLowerCase().includes(query) ||
        ticket.ticketId.toLowerCase().includes(query);

      const matchType = ticketTypeSelect === "all" || ticket.status === Number(ticketTypeSelect)
       
        return matchSearch && matchType;
    });
  };

  const ticketStatus = Object.keys(TICKET_STATUS_SELECT).map(
    Number
  ) as TicketStatusValue[];

  return (
    <div>
      <SubHeader title="Tickets">
        <Button asChild>
          <Link to="/tickets/new">New Ticket</Link>
        </Button>
      </SubHeader>

      <section className="bg-white p-5 rounded space-y-6">
        <div className="flex items-center justify-between">
          <InputGroup className="sm:max-w-md">
            <InputGroupInput
              placeholder="Pesquise pelo nome ou ID do Ticket"
              value={ticketQuery}
              onChange={(e) => setTicketQuery(e.target.value)}
            />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>

          <Select
            onValueChange={(value) =>
              setTicketTypeSelect(
                value === "all" ? "all" : (Number(value) as TicketStatusValue)
              )
            }
            value={String(ticketTypeSelect)}
          >
            <SelectTrigger className="w-60">
              <SelectValue placeholder="Selecione o tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                <TicketStatus className="bg-linear-to-r from-blue-500 via-green-500 to-amber-500"/>
                Todos
              </SelectItem>
              {ticketStatus.map((typeId) => (
                <SelectItem value={String(typeId)} key={typeId}>
                  <TicketStatus variant={typeId}/>
                  {TICKET_STATUS_SELECT[typeId]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {filteredTickets().map((ticket) => (
          <TicketCard key={ticket.ticketId} ticket={ticket} />
        ))}
      </section>
    </div>
  );
}
