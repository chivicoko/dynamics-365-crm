'use client';

import { AccessTimeOutlined, AssistWalkerOutlined, CampaignOutlined, CompareOutlined, ContactMailOutlined, DashboardOutlined, HomeOutlined, KeyboardArrowDown, KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, LeaderboardOutlined, ListAltOutlined, LocalActivityOutlined, LocalPostOfficeOutlined, Menu, Person3Outlined, PinOutlined, ProductionQuantityLimitsOutlined, ReceiptOutlined, RequestPageOutlined, RequestQuoteOutlined } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import AgentSkillModal from './AgentSkillModal';

interface SidebarProps {
    show?: string;
    closeSidebar?: () => void;
}

const sidebarTabs = [
    {
        id: 1,
        title: 'My work',
        tabs: [
            { id: 1, title: "Sales accelerator", path: '/sales-accelerator', icon: <AccessTimeOutlined style={{fontSize: '15px'}} /> },
            { id: 2, title: "Dashboards", path: '/dashboards', icon: <DashboardOutlined style={{fontSize: '15px'}} /> },
            { id: 3, title: "Activities", path: '/activities', icon: <LocalActivityOutlined style={{fontSize: '15px'}} /> },
        ]
    },
    {
        id: 2,
        title: 'Customers',
        tabs: [
            { id: 1, title: "Accounts", path: '/accounts', icon: <Person3Outlined style={{fontSize: '15px'}} /> },
            { id: 2, title: "Contacts", path: '/contacts', icon: <ContactMailOutlined style={{fontSize: '15px'}} /> },
        ]
    },
    {
        id: 3,
        title: 'Sales',
        tabs: [
            { id: 1, title: "Leads", path: '/leads', icon: <LeaderboardOutlined style={{fontSize: '15px'}} /> },
            { id: 2, title: "Opportunties", path: '/opportunities', icon: <LocalPostOfficeOutlined style={{fontSize: '15px'}} /> },
            { id: 3, title: "Competitors", path: '/competitors', icon: <CompareOutlined style={{fontSize: '15px'}} /> },
        ]
    },
    {
        id: 4,
        title: 'Collateral',
        tabs: [
            { id: 1, title: "Quotes", path: '/quotes', icon: <RequestQuoteOutlined style={{fontSize: '15px'}} /> },
            { id: 2, title: "Orders", path: '/orders', icon: <RequestPageOutlined style={{fontSize: '15px'}} /> },
            { id: 3, title: "Invoices", path: '/invoices', icon: <ReceiptOutlined style={{fontSize: '15px'}} /> },
            { id: 4, title: "Products", path: '/products', icon: <ProductionQuantityLimitsOutlined style={{fontSize: '15px'}} /> },
            { id: 5, title: "Sales Literature", path: '/sales-literature', icon: <AssistWalkerOutlined style={{fontSize: '15px'}} /> },
        ]
    },
    {
        id: 5,
        title: 'Marketing',
        tabs: [
            { id: 1, title: "Marketing lists", path: '/marketing-lists', icon: <ListAltOutlined style={{fontSize: '15px'}} /> },
            { id: 2, title: "Quick campaigns", path: '/quick-campaigns', icon: <CampaignOutlined style={{fontSize: '15px'}} /> },
        ]
    },
    {
        id: 6,
        title: 'Performance',
        tabs: [
            { id: 1, title: "Sales lists", path: '/marketing-lists', icon: <ListAltOutlined style={{fontSize: '15px'}} /> },
            { id: 2, title: "Quick sales", path: '/quick-campaigns', icon: <CampaignOutlined style={{fontSize: '15px'}} /> },
        ]
    },
]

const Sidebar: React.FC<SidebarProps> = ({ show = 'hidden', closeSidebar = () => {} }) => {
    const [open, setOpen] = useState(false);
    const [leadOpen, setLeadOpen] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    const handleLeadToggle = () => setLeadOpen((prev) => !prev);

    
  const pathName = usePathname();
  // console.log(pathName);

  const isActivePath = (route: string | null) => {
    if (!route) return false;

    if (route === '/') {
        return pathName === route;
    } else {
        return pathName.startsWith(route);
    }
  };


  const handleMouseOver = (title: string) => {
    setHoveredCard(title);
  }

  const handleMouseOut = () => {
    setHoveredCard(null)
  }
    

    return (
    <nav className={` ${show === 'block' ? 'fixed lg:hidden' : 'hidden'} bg-gray-100 pb-16 h-fit min-h-screen lg:block top-0 left-0 z-50 lg:z-auto w-4/5 sm:w-3/5 lg:w-[13vw] flex flex-col justify-start items-center gap-5 transition-all duration-300`}>
        <div className='py-3 w-full flex flex-col items-center lg:items-start'>
            <button className='self-end mr-3 md:mr-8 mt-2 text-3xl lg:hidden' onClick={closeSidebar}>&times;</button>
            <button onClick={() => setOpen(!open)} className="text-gray-700 hidden lg:block px-3 focus:outline-[#247B7B]">
                <Menu />
            </button>
            <div className='h-[93%] w-full overflow-auto custom-scrollbar'>
                <div className="flex flex-col gap-2 text-gray-600 text-[0.9rem] mt-4">
                    {/* <button className='flex items-center gap-2 px-3'><HomeOutlined fontSize='small' /> Home</button> */}
                    <Link href='/' className='flex group text-[0.8rem] font-medium'>
                        <span className={`${isActivePath('/') ? "bg-white" : ""} flex items-center gap-1 md:group-hover:bg-white w-full p-1`}>
                            <span className={`${isActivePath('/') ? "bg-blue-600" : ""} w-[3px] h-5 md:group-hover:bg-blue-600 rounded-full shadow-lg`}></span>
                            <HomeOutlined style={{fontSize: '15px'}} /> Home
                        </span>
                    </Link>
                    <button onClick={handleLeadToggle} onMouseOver={() => handleMouseOver("Agent Skill")} onMouseOut={handleMouseOut} className='relative flex group text-[0.8rem] font-medium'>
                        <span className='flex items-center gap-1 md:group-hover:bg-white w-full p-1'>
                            <span className='w-[3px] h-5 md:group-hover:bg-blue-600 rounded-full shadow-lg'></span>
                            <span className='flex items-center gap-2'><LeaderboardOutlined style={{fontSize: '15px'}} /> Agent Skill</span>
                        </span>
                        
                        {/* Popup on hover */}
                        {hoveredCard === 'Agent Skill' && (
                        <span className="absolute -top-14 left-16 mt-2 p-2 w-fit bg-black text-white shadow-xl rounded-lg z-10 text-xs">
                            <span>Click to view more about Agent Skill</span>
                        </span>
                        )}
                    </button>
                    <button className='flex items-center justify-between px-3 text-[0.8rem] font-medium'><span className='flex items-center gap-2'><AccessTimeOutlined style={{fontSize: '15px'}} /> Recent</span> <KeyboardArrowDown style={{fontSize: '15px'}}/></button>
                    <button className='flex items-center justify-between px-3 text-[0.8rem] font-medium'><span className='flex items-center gap-2'><PinOutlined style={{fontSize: '15px'}} /> Pinned</span> <KeyboardArrowDown style={{fontSize: '15px'}}/></button>
                </div>
                <div className="flex flex-col gap-5 text-gray-600 text-sm mt-5">
                    {sidebarTabs.map(sidebarTab => {
                        return(
                            <div key={sidebarTab.id} className=''>
                                <h3 className='font-semibold text-[0.8rem] text-gray-600 px-3'>{sidebarTab.title}</h3>
                                <div className="flex flex-col gap-1 mt-2">
                                    {sidebarTab.tabs.map(tab => {
                                        return(
                                            <Link href={tab.path} key={tab.id} onMouseOver={() => handleMouseOver(tab.title)} onMouseOut={handleMouseOut} className='relative flex group text-gray-600'>
                                                <span className={`${isActivePath(tab.path) ? "bg-white" : ""} flex items-center gap-1 text-[0.8rem] font-medium md:group-hover:bg-white w-full px-1 py-1`}>
                                                    <span className={`${isActivePath(tab.path) ? "bg-blue-600" : ""} w-[3px] h-5 md:group-hover:bg-blue-600 rounded-full shadow-lg`}></span>
                                                    {tab.icon} {tab.title}
                                                </span>
        
                                                {/* Popup on hover */}
                                                {hoveredCard === tab.title && (
                                                    <div className="absolute -top-9 right-1 mt-2 p-2 w-fit bg-black text-white shadow-xl rounded-lg z-10 text-xs">
                                                        <p>View &apos;{tab.title}&apos;</p>
                                                    </div>
                                                )}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className='bg-gray-100 px-2 py-1 fixed bottom-0 left-0 z-50 lg:z-auto w-4/5 sm:w-3/5 lg:w-[12.9vw] border-t-2 flex items-center justify-between text-[0.8rem]'>
            <span className='flex items-center gap-2 font-semibold'><span className='bg-purple-600 text-gray-100 flex items-center justify-center py-2 px-3'>S</span> Sales</span>
            <span className='flex flex-col items-center gap-0'>
                <button className=''><KeyboardArrowUpOutlined fontSize='small'/></button>
                <button className=''><KeyboardArrowDownOutlined fontSize='small'/></button>
            </span>
        </div>

        {leadOpen && <AgentSkillModal handleLeadToggle={handleLeadToggle} />}
    </nav>
  );
};

export default Sidebar;
