import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TICKET_TYPE_SELECT } from "@/constants/ticket-config";
import type { TicketTypeValue } from "@/enums/ticket-type";
import type { CreateTicketSchemaType } from "@/validations/schema-types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTicketSchema } from "@/validations/create-ticket-schema";
import { Loader2 } from "lucide-react";

export function CreateTicketForm() {
  const form = useForm<CreateTicketSchemaType>({
    resolver: zodResolver(CreateTicketSchema),
    defaultValues: {
      ticketTitle: "",
      ticketMessage: "",
    },
  });

  const onSubmit = async (data: CreateTicketSchemaType) => {
    await new Promise((resolver) => setTimeout(resolver, 2000));
    console.log(data);
  };

  const ticketTypes = Object.keys(TICKET_TYPE_SELECT).map(
    Number
  ) as TicketTypeValue[];

  return (
    <Form {...form}>
      <form className="grid space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6 items-baseline">
          <FormField
            control={form.control}
            name="ticketType"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel>Tipo de ticket</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))}
                  >
                    <SelectTrigger className="w-full" aria-invalid={fieldState.invalid} >
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      {ticketTypes.map((typeId) => (
                        <SelectItem key={typeId} value={String(typeId)}>
                          {TICKET_TYPE_SELECT[typeId]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ticketTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titulo do ticket</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o titulo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="ticketMessage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem do ticket</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Digite o problema aqui..."
                  className="resize-none h-24"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          size="lg"
          className="ml-auto"
          disabled={form.formState.isSubmitting}
        >

          {form.formState.isSubmitting && <Loader2 className="animate-spin" />}
          {form.formState.isSubmitting ? "Criando..." : "Criar Ticket"}
        </Button>
      </form>
    </Form>
  );
}
