import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import type { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

export function Header({ setOpenMenu }: HeaderProps) {
  return (
    <header className="bg-primary-system  ">
      <Button
        size="icon-sm"
        variant="ghost"
        onClick={() => setOpenMenu((prev) => !prev)}
      >
        <Menu />
      </Button>
      <h1>Header</h1>
    </header>
  );
}
