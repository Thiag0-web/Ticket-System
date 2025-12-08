import { LayoutGrid, Settings, Ticket, User, Users } from "lucide-react";
import { buttonVariants } from "./ui/button";

interface SidebarProps {
  openMenu: boolean;
}

export function Sidebar({ openMenu }: SidebarProps) {
  return (
    <div className="h-full bg-white pt-7 border-r border-tertiary-system w-[250px] data-[open=false]:-ml-[250px] transition-all" data-open={openMenu}>
      <h1 className="text-center text-[#2E2C34] mb-12 font-semibold text-2xl uppercase">
        Ticket Lead
      </h1>

      <div className="grid">
        <a
          href=""
          className={buttonVariants({
            variant: "secondary",
            className: "rounded-none justify-start px-7!",
          })}
        >
          <LayoutGrid />
          Dashboard
        </a>
        <a
          href=""
          className={buttonVariants({
            variant: "ghost",
            className: "rounded-none justify-start px-7!",
          })}
        >
          <User />
          Users
        </a>
        <a
          href=""
          className={buttonVariants({
            variant: "ghost",
            className: "rounded-none justify-start px-7!",
          })}
        >
          <Ticket />
          Tickets
        </a>
        <a
          href=""
          className={buttonVariants({
            variant: "ghost",
            className: "rounded-none justify-start px-7!",
          })}
        >
          <Users />
          Officials
        </a>
        <a
          href=""
          className={buttonVariants({
            variant: "ghost",
            className: "rounded-none justify-start px-7!",
          })}
        >
          <Settings />
          Site Settings
        </a>
      </div>
    </div>
  );
}
