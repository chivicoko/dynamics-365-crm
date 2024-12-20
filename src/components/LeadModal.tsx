'use client';

import { leadModalProps } from '@/utils/types'
import { EditOutlined, LinkedIn, SendOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React, { useState } from 'react'
import EngageLead from './EngageLead';

const LeadModal: React.FC<leadModalProps> = ({handleLeadToggle}) => {
    const [leadEngageOpen, setLeadEngageOpen] = useState(true);

    const handleEngageToggle = () => {
        setLeadEngageOpen((prev) => !prev);
    }

  return (
    <div className="fixed inset-0 p-2 flex items-center justify-center z-50">
        <div className="relative w-[94%] h-[89.5%] sm:w-[90%] sm:h-[88.5%] md:w-[90%] md:h-[88.5%] lg:w-[75%] lg:h-[88.5%] xl:w-[52%] xl:h-[88.5%] rounded-[20px] p-[2.5px] bg-gradient-to-r from-[#5971fc] via-[#60a5fa] to-[#c084fc]">
            <div className="custom-scrollbar overflow-auto py-3 px-2 sm:py-5 sm:px-6 w-full h-full bg-gradient-to-b from-white via-white to-[#f0edf4] rounded-[17px] shadow-xl flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <p className='flex items-center gap-1'>📧 <span>Engage with Jane Reyes</span></p>
                    <button onClick={handleLeadToggle} className='w-6 h-6 p-2 flex items-center justify-center rounded-full hover:bg-gray-100 text-2xl'>&times;</button>
                </div>

                <div className="flex gap-2 rounded-lg shadow-md py-2 px-3 border-t border-gray-100">
                    <div className="relative w-12 h-12 rounded-full">
                        <Image
                        src="/userplaceholder1.svg"
                        alt="GreenBasket's Logo"
                        fill
                        className="object-contain rounded-full"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="flex flex-col gap-1 ">
                        <p className='text-gray-700 font-semibold'>Jane Reyes</p>
                        <div className='text-xs flex items-center gap-1'>
                            <span className='border-r-2 border-gray-400 pr-1 text-blue-500'><LinkedIn/></span>
                            <span className='text-gray-600'>COO, Northwind Traders</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 rounded-lg py-2 px-3 border-t border-gray-100 bg-gradient-to-b from-white via-[#60a5fa1d] to-[#c084fc07]">
                    <div className="flex items-center justify-between flex-wrap w-full gap-2 rounded-lg p-3 bg-gradient-to-r from-[#5971fc2c] via-[#60a5fa32] to-[#c084fc28]">
                        <p className='text-xs'>✨ Jane may be interested in upgrading espresso machines for her in-store coffee shops.</p>
                        <div className="flex items-center flex-wrap gap-1">
                            <button className='rounded-sm py-1 px-2 text-xs bg-white'><EditOutlined style={{fontSize: '15px'}}/> Edit</button>
                            <button className='rounded-sm py-1 px-2 text-xs bg-gradient-to-r from-[#5971fc] via-[#60a5fa] to-[#c084fc]'><SendOutlined style={{fontSize: '15px'}}/> Approve and send</button>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 rounded-sm shadow-md pt-2 px-3">
                        <button onClick={handleEngageToggle} className={`${leadEngageOpen ? 'border-[#60a5fa]' : 'border-transparent'} text-xs border-b-[3px] md:hover:border-[#60a5fa] py-1`}>Engage</button>
                        <button onClick={handleEngageToggle} className={`${leadEngageOpen ? 'border-transparent' : 'border-[#60a5fa]'} text-xs border-b-[3px] md:hover:border-[#60a5fa] py-1`}>Research</button>
                    </div>

                    {leadEngageOpen ? 
                        <EngageLead/>
                    :
                        <div className="flex flex-col gap-2 rounded-lg shadow-xl py-2 px-3 bg-white">
                            <p>Research Jane Reyes from here</p>
                        </div>
                    }

                </div>

                <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4">
                        <p className='text-gray-700'>Showing 1 of 9</p>
                        <button className='text-blue-500 text-xs border-l-2 border-gray-300 px-4'>Show all</button>
                    </div>
                    <div className="flex text-xs items-center gap-2">
                        <button className='text-gray-500'><ThumbUpOutlined style={{fontSize: '18px'}} /></button>
                        <button className='text-gray-500'><ThumbDownOutlined style={{fontSize: '18px'}} /></button>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default LeadModal