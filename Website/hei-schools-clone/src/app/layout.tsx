import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Nook Junior School Gurugram, Sector 49 - Best Preschool and Daycare",
  description: "Nook Junior School Gurugram, Sector 49 is a premier International Preschool in India based on Finnish early education. Providing nurturing environment for early learning and development.",
  keywords: "preschool, daycare, Gurugram, Nook Junior School, Finnish education, early childhood education, Sector 49",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </ClientBody>
    </html>
  );
}
