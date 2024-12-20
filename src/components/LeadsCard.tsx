import { leadModalProps } from '@/utils/types'
import { CalendarMonthOutlined, EmailOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

const leadsCards = [
    { id: 1, name: "Jane Rayes", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <EmailOutlined  style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes', description: 'Jane may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 2, name: "Allan Munger", img: '/userplaceholder1.svg', position: 'Head of Real Estate Development', at: 'Contoso Coffee', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Prepare for meeting with Allan', description: 'Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.', footerWriteup1: 'Upcoming meeting', footerWriteup2: 'Due today' },
    { id: 3, name: "Harrison Curtis", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes', description: 'Jane may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 4, name: "Jermaine Berrett", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes', description: 'Jane may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 5, name: "Gerald Stephens", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes', description: 'Jane may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 6, name: "Halle Griffiths", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes', description: 'Jane may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 7, name: "Rachel Michael", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes', description: 'Jane may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 8, name: "Alex Baker", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes', description: 'Jane may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 9, name: "Lily Pyles", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes', description: 'Jane may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 10, name: "Jane Reyes", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes', description: 'Jane may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
    { id: 11, name: "Mike Pears", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes', description: 'Jane may be interested in upgrading espresso machine for her in-store coffee shops.', footerWriteup1: 'Expand business', footerWriteup2: 'High buying intent' },
  ]
  
const LeadsCard: React.FC<leadModalProps> = ({ handleLeadToggle } ) => {
    
  return (
    <div className="w-full flex items-center flex-wrap gap-4 pr-6 overflow-auto custom-scrollbar">
        {leadsCards.slice(0,2).map(leadsCard => (
            <button key={leadsCard.id} onClick={handleLeadToggle} className="flex-1 rounded-xl shadow-sm border-2 py-4 px-3 text-start">
                <div className="flex gap-2">
                    <div className="relative w-8 h-8 rounded-full">
                        <Image
                        src={leadsCard.img}
                        alt="GreenBasket's Logo"
                        fill
                        className="object-contain rounded-full"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className='text-xs font-semibold'>{leadsCard.name}</p>
                        <div className='text-xs text-gray-500 flex items-center gap-1 whitespace-nowrap'>
                            {leadsCard.position}
                            <p className='w-1 h-1 bg-gray-500 rounded-full inline'></p>
                            {leadsCard.at}
                        </div>
                    </div>
                </div>
                <div className="p-3 my-2 bg-gradient-to-tr from-blue-50 to-purple-50 flex flex-col gap-2 rounded-xl text-xs">
                <div className="flex items-center gap-1">
                    {leadsCard.icon}
                    <p className='text-xs font-semibold'>{leadsCard.topic}</p>
                </div>
                <p className='text-xs'>{leadsCard.description}</p>
                </div>
                <div className='text-xs text-gray-500 px-3 flex items-center gap-1'>
                    {leadsCard.footerWriteup1}
                    <p className='w-1 h-1 bg-gray-500 rounded-full'></p>
                    {leadsCard.footerWriteup2}
                </div>
            </button>
        ))}
    </div>
  )
}

export default LeadsCard;