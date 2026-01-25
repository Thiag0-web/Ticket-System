import { BaseLayout } from "@/layouts/baseLayout";
import { TicketPage } from "@/pages/create-ticket/page";
import { TicketPageId } from "@/pages/ticket/page";
import { TicketsPage } from "@/pages/tickets/page";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
        <Route path="/" element={<Navigate to="/tickets" replace />} />
          <Route path="/tickets" element={<TicketsPage />}/>
          <Route path="/tickets/new" element={<TicketPage/>}/>
          <Route path="/tickets/:ticketid" element={<TicketPageId />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
