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
  

  return (
    <section className='py-3 px-4 flex flex-col gap-2'>
      <nav className="z-30">
        <div className="flex items-center justify-between py-1 border bg-white shadow-md rounded-md">
          <button onClick={() => setOpen(!open)} className="ml-3 lg:hidden text-gray-700 focus:outline-[#247B7B]">
            <Menu />
          </button>

          <button onClick={handlesalesLeadToggle} className='rounded-md px-3 whitespace-nowrap'>
            My open leads 
            {salesLeadOpen ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}
          </button>

          <div className="hidden md:flex items-center flex-wrap gap-2 px-2">
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
