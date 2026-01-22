import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { ReplyTicketSchema } from "@/validations/reply-ticket-schema";
import type { ReplyTicketSchemaType } from "@/validations/schema-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function ReplyTicketForm() {
    const navigate = useNavigate()
    
    const form = useForm<ReplyTicketSchemaType>({
        resolver: zodResolver(ReplyTicketSchema),
        defaultValues: {
            replyMessage: ""
        }
    })

    const onSubmit = async(data: ReplyTicketSchemaType) => {
        await new Promise((resolver) => setTimeout(resolver, 2000))
        console.log(data)
        toast.success("Ticket respondido com sucesso")
        navigate("/tickets")
    }

    return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="border border-muted bg-primary-foreground rounded p-5 space-y-4 grid">
            <FormField
            control={form.control}
            name="replyMessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Resposta ao Ticket</FormLabel>
                <FormControl>
                  <Textarea placeholder="Digite a sua resposta" {...field} className="resize-none h-24"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

            <Button type="submit" disabled={form.formState.isSubmitting} className="ml-auto">
                {form.formState.isSubmitting && <Loader2 className="animate-spin"/> }
                {form.formState.isSubmitting ? "Enviando" : "Enviar resposta"}
            </Button>

        </form>
    </Form>
  )
}
