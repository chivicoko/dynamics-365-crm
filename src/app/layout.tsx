import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dynamics 365 crm | Sales Hub",
  description: "Sales Hub services at its possible best",
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
