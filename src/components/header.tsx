import { BellDot, ChevronDown, LogOut, Menu, Settings, UserRoundPen } from "lucide-react";
import { Button } from "./ui/button";
import type { Dispatch, SetStateAction } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export function Header({ setOpenMenu }: HeaderProps) {
  return (
    <header className="flex h-20 items-center justify-between bg-white px-4 border-b ">
      <div className="flex gap-3 items-center">
        <Button
          size="icon-sm"
          variant="ghost"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <Menu />
        </Button>
        <h3>
          Welcome! <strong>John Smith</strong>
        </h3>
      </div>

      <div className="flex items-center gap-4">
        <Button size="icon-lg" className="rounded-full" variant="outline">
          <BellDot />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="lg"
              className="pr-2! pl-1.5! rounded-full bg-[#f1f1f1]"
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span>Thiago Oliveira</span>
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Perfil
                <DropdownMenuShortcut>
                  <UserRoundPen />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Configurações
                <DropdownMenuShortcut>
                  <Settings />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>Linkedin</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              Sair
              <DropdownMenuShortcut>
                <LogOut />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
