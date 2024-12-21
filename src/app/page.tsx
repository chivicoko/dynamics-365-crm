import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import React from 'react'

export default function Home() {
  return (
    <section className="relative flex bg-gray-100">
        <Sidebar/>
        <main className="w-full lg:w-[87vw] min-h-screen pb-16 border-l-2">
            <Navbar />
            <section className='py-3 px-4'>
                <div className='py-5 px-6 bg-white rounded-[13px] shadow-xl text-center'>
                    <h1 className='mb-5 text-3xl'>Welcome to the Home page</h1>
                    <p>Click the &apos;Leads&apos; tab on the left sidebar</p>
                </div>
            </section>
        </main>
    </section>
  );
}
