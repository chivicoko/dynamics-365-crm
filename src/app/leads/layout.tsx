import { ReactNode } from 'react';
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Admin Area",
  description: "GreenBasket Stores is the number 1 Online store for groceries of all sorts, making buying and selling of groceries of all sorts really easy for everyone.",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex bg-gray-100">
      <Sidebar />
      <div className="w-full lg:w-[87vw] min-h-screen pb-16 border-l-2">
        <Navbar />
        <section className="w-full px-4 rounded-md">
          {children}
        </section>
      </div>
    </div>
  );
}
