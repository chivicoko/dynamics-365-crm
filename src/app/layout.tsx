import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dynamics 365 CRM | Sales Hub",
    template: "%s | Dynamics 365 CRM"
  },
  description: "Sales Hub services at its possible best",
  keywords: "CRM, Sales, Hub, Sales hub, services, leads, sales leads, customers, clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative flex flex-col bg-gray-100">
        <div className="">
          <main className="">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
