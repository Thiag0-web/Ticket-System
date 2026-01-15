import { SubHeader } from "@/components/subHeader";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { CreateTicketForm } from "./create-ticket-form";

export function TicketPage() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Button className="mb-4" variant="outline" size="icon-sm">
          <ChevronLeft />
        </Button>
        <SubHeader title="Novo ticket" />
      </div>

      <main className="bg-accent rounded p-5 space-y-6">
        <div className="space-y-1">
          <h2 className="font-semibold text-lg">Crie um Ticket rápido</h2>
          <p className="text-sm text-muted-foreground ">
            Redija e responda a novas perguntas e questões
          </p>
        </div>
        <CreateTicketForm />
      </main>
    </div>
  );
}
