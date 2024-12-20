import { CalendarMonthOutlined, EmailOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

const KeyActivities = [
    { id: 1, name: "Cafe A100 for Woodland Bank", company: 'Woodland Bank', amount: '$280,000', days: '8 days to close', img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <EmailOutlined  style={{fontSize: '14px'}} />, topic: 'Review draft and reply to Chris Naido' },
    { id: 2, name: "Partnership opportunity for Fabrikam", company: 'Fabrikam', amount: '$5,000,000', days: '12 days to close', img: '/userplaceholder1.svg', position: 'Head of Real Estate Development', at: 'Contoso Coffee', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: "Prepare me for Fabrikan's stakeholders meeting" },
    { id: 3, name: "Harrison Curtis", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 4, name: "Jermaine Berrett", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 5, name: "Gerald Stephens", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 6, name: "Halle Griffiths", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 7, name: "Rachel Michael", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 8, name: "Alex Baker", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 9, name: "Lily Pyles", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 10, name: "Jane Reyes", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
    { id: 11, name: "Mike Pears", img: '/userplaceholder1.svg', position: 'COO', at: 'Northwind Traders', icon: <CalendarMonthOutlined style={{fontSize: '14px'}} />, topic: 'Engage with Jane Reyes' },
  ]
  
const KeyActivity = () => {
  return (
    <div className="flex flex-col items-center gap-3 pr-6">
        {KeyActivities.slice(0,2).map(keyActivity => {
        return(
          <div key={keyActivity.id} className="w-full rounded-xl border shadow-sm py-2 px-3">
            <div className="flex gap-2">
              <div className="relative w-8 h-8 rounded-full">
                <Image
                  src={keyActivity.img}
                  alt="GreenBasket's Logo"
                  fill
                  className="object-contain rounded-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-">
                <p className='text-xs font-semibold'>{keyActivity.name}</p>
                {/* <p className='text-xs'>{keyActivity.position} . {keyActivity.at}</p> */}
                <div className='text-xs text-gray-500 flex items-center gap-1'>
                  {keyActivity.company}
                  <p className='w-1 h-1 bg-gray-500 rounded-full inline'></p>
                  {keyActivity.amount}
                  <p className='w-1 h-1 bg-gray-500 rounded-full inline'></p>
                  {keyActivity.days}
                </div>
              </div>
            </div>
            <div className="py-2 px-3 mt-1 bg-gradient-to-tr from-blue-50 to-purple-50 flex flex-col gap-2 rounded-md text-xs">
              <div className="flex items-center gap-1">
                {keyActivity.icon}
                <p className='text-xs'>{keyActivity.topic}</p>
              </div>
            </div>
          </div>
        )})}
    </div>
  )
}

export default KeyActivity;