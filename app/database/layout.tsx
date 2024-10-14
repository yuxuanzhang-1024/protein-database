import React from "react";
import { Header } from "../ui/header";
export const experimental_ppr = true;
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Header />
        <div>{children}</div>
    </div>
  );
}