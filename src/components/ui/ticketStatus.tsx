import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ETicketStatus } from "@/enums/ticket-status"

const ticketVariants = cva(
  "size-3.5 rounded-full shrink-0 ",
  {
    variants: {
      variant: {
        [ETicketStatus.NEW_TICKET]:"bg-blue-500",
        [ETicketStatus.IN_PROGRESSTICKET]: "bg-amber-500",
        [ETicketStatus.RESOLVEDTICKET]: "bg-green-500"
      },
    },
    defaultVariants: {
      variant: ETicketStatus.NEW_TICKET,
    },
  }
)

function TicketStatus({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof ticketVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(ticketVariants({ variant }), className)}
      {...props}
    />
  )
}

export { TicketStatus, ticketVariants }
