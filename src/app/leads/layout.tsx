import { ReactNode } from 'react';
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Best of the Leads",
  description: "Sales Hub services at its possible best",
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex bg-gray-100">
      <Sidebar />
      <div className="w-full lg:w-[87vw] min-h-screen pb-16 border-l-2">
        <Navbar />
        <section className="w-full px-3 md:px-4 rounded-md">
          {children}
        </section>
      </div>
    </div>
  );
}
