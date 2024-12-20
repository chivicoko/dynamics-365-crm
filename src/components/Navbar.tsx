'use client';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useEffect, useState } from 'react';
import { Add, DeleteOutline, EditNoteOutlined, ImageOutlined, KeyboardArrowDown, KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, List, Menu, PeopleOutlineOutlined, PinOutlined, Refresh } from '@mui/icons-material';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';
import LeadsHeaderArea from './LeadsHeaderArea';

const navbarTabs = [
  { id: 1, title: "Show chart", icon: <ImageOutlined style={{fontSize: '15px'}} /> },
  { id: 2, title: "Focused view", icon: <List style={{fontSize: '15px'}} /> },
  { id: 3, title: "New", icon: <Add style={{fontSize: '15px'}} /> },
  { id: 4, title: "Refresh", icon: <Refresh style={{fontSize: '15px'}} /> },
  { id: 5, title: "Collaborate", icon: <PeopleOutlineOutlined style={{fontSize: '15px'}} /> },
  { id: 6, title: "Delete", icon: <DeleteOutline style={{fontSize: '15px'}} /> },
  { id: 7, title: "Smart data", icon: <AccountCircleIcon style={{fontSize: '15px'}} /> },
  { id: 8, title: "Edit filters", icon: <AccountCircleIcon style={{fontSize: '15px'}} /> },
  { id: 9, title: "Edit columns", icon: <EditNoteOutlined style={{fontSize: '15px'}} /> },
]

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [salesLeadOpen, setSalesLeadOpen] = useState(false);

  const pathName = usePathname();
  // console.log(pathName);
  
  useEffect(() => {
    if (pathName === '/leads') {
      setSalesLeadOpen(true);
    }
  }, [pathName]);
  
    const handlesalesLeadToggle = () => {
      if (pathName === '/leads') {
        setSalesLeadOpen((prev) => !prev);
      }
    };
  
  const closeSidebar = () => setOpen(false);
  
  const handleToggleSidebar2 = () => setOpen2((prev) => !prev);
  

  return (
    <section className='py-3 px-3 sm:px-4 flex flex-col gap-2 transition-all duration-300 '>
      <nav className="z-30">
        <div className="flex items-center justify-between gap-4 py-1 border bg-white shadow-md rounded-md">
          <button onClick={() => setOpen(!open)} className="ml-3 lg:hidden text-gray-700 focus:outline-[#247B7B]">
            <Menu />
          </button>

          <div className="flex items-center sm:gap-4">
            <button onClick={handlesalesLeadToggle} className='rounded-md px-3 whitespace-nowrap'>
              My open leads 
              {salesLeadOpen ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
            </button>
            
            {/* Hamburger menu for mobile */}
            <button 
              className="inline-flex items-center mr-2 p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700" 
              aria-controls="navbar-default" aria-expanded="false" onClick={handleToggleSidebar2}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
          </div>

          <div className="hidden lg:flex items-center flex-wrap gap-2 px-2">
            <ul className="flex items-center flex-wrap gap-2">
              {navbarTabs.slice(0, 6).map(navbarTab => {
                return(
                  <li key={navbarTab.id}>
                    <button className='py-1 px-2 text-xs font-semibold whitespace-nowrap text-gray-700'>{navbarTab.icon} {navbarTab.title}</button>
                  </li>
                )
              })}
            </ul>
            <ul className="flex items-center flex-wrap gap-2">
              {navbarTabs.slice(6, 9).map(navbarTab => {
                return(
                  <li key={navbarTab.id}>
                    <button className='py-1 px-2 text-xs font-semibold whitespace-nowrap text-gray-700 border rounded-[3.5px]'>{navbarTab.icon} {navbarTab.title}</button>
                  </li>
                )
              })}
            </ul>

            <button className='flex items-center justify-between gap-1 py-[2px] px-1 rounded-[3.5px] bg-blue-700 text-white'>
              <span className='' style={{fontSize: '14px'}}><PinOutlined fontSize='small' /> </span> 
              <span className='h-3 w-[1px] bg-gray-200'></span>
              <KeyboardArrowDown fontSize='small'/>
            </button>
          </div>

          <div className={`${open2 ? '-translate-y-full' : 'translate-y-0'} fixed left-0 top-0 bg-white w-screen min-h-fit h-1/4 z-[1000] transform transition-transform duration-300 lg:hidden flex flex-col items-center justify-center flex-wrap gap-2 shadow-xl p-6 pt-2`}>
            <button className='self-end my-2 mr-4 text-3xl lg:hidden' onClick={handleToggleSidebar2}>&times;</button>
            <div className='flex items-center gap-3 flex-wrap'>
              <ul className="flex items-center flex-wrap gap-2">
                {navbarTabs.slice(0, 6).map(navbarTab => {
                  return(
                    <li key={navbarTab.id}>
                      <button className='py-1 px-2 text-xs font-semibold whitespace-nowrap text-gray-700'>{navbarTab.icon} {navbarTab.title}</button>
                    </li>
                  )
                })}
              </ul>
              <ul className="flex items-center flex-wrap gap-2">
                {navbarTabs.slice(6, 9).map(navbarTab => {
                  return(
                    <li key={navbarTab.id}>
                      <button className='py-1 px-2 text-xs font-semibold whitespace-nowrap text-gray-700 border rounded-[3.5px]'>{navbarTab.icon} {navbarTab.title}</button>
                    </li>
                  )
                })}
              </ul>

              <button className='flex items-center justify-between gap-1 py-[2px] px-1 rounded-[3.5px] bg-blue-700 text-white'>
                <span className='' style={{fontSize: '14px'}}><PinOutlined fontSize='small' /> </span> 
                <span className='h-3 w-[1px] bg-gray-200'></span>
                <KeyboardArrowDown fontSize='small'/>
              </button>
            </div>
          </div>
          
        </div>
      </nav>

      {salesLeadOpen &&
        <LeadsHeaderArea />
      }

      {open && (
        <>
          <Sidebar show="block" closeSidebar={closeSidebar} />
          <div onClick={closeSidebar} className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"/>
        </>
      )}
    </section>
  );
};

export default Navbar;
