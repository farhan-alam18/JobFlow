import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import AdminNavbar from "./AdminNavbar";
import { auth } from "@clerk/nextjs/server";

export const metadata: Metadata = {
  title: "Admin",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    auth().protect()
  return (
    <ClerkProvider>
      <AdminNavbar />
      {children}
    </ClerkProvider>
  );
}
