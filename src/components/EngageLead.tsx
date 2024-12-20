'use client';

import { leadsProps2 } from '@/utils/types';
import { KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, PieChart, SecurityOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React, { useState } from 'react'

const EngageLead: React.FC<leadsProps2> = ({lead}) => {
    const [salesLeadOpen, setSalesLeadOpen] = useState(false);

    const handlesalesLeadToggle = () =>setSalesLeadOpen((prev) => !prev);

    // console.log(lead);

  return (
    <>
        <div className="flex flex-col gap-2 rounded-lg shadow-xl py-2 px-3 bg-white">
            <div className="flex flex-col w-full gap-2 rounded-xl p-3 bg-gradient-to-r from-[#5971fc0b] via-[#60a5fa0d] to-[#c084fc13]">
                <p className='text-xs font-semibold bg-gradient-to-r from-[#7c8ff6] via-[#5681b5] to-[#8e62ba] bg-clip-text text-transparent w-fit'>Why I picked this lead</p>
                
                <ul>
                    <li className='text-xs flex items-center gap-2'>
                        <span className='w-1 h-1 bg-gray-500 rounded-full'></span>
                        <span>
                            {lead.name} is a <strong>key decision maker</strong> and was browsing <strong>&apos;espresson machines&apos;</strong> on First Coffee&apos;s website
                            <span className='text-[8px] bg-white border rounded-sm px-[2px] ml-3'>1</span>
                        </span>
                    </li>
                    <li className='text-xs flex items-center gap-2'>
                        <span className='w-1 h-1 bg-gray-500 rounded-full'></span>
                        <span>
                            Multiple people at her company have reported &apos;slowness&apos; during <strong>service requests</strong>
                            <span className='text-[8px] bg-white border rounded-sm px-[2px] ml-3'>2</span>
                        </span>
                    </li>
                    <li className='text-xs flex items-center gap-2'>
                        <span className='w-1 h-1 bg-gray-500 rounded-full'></span>
                        <span>
                            Northwind Traders currently see  <strong>$200M in revenue</strong> from their in-store coffee shops.
                            <span className='text-[8px] bg-white border rounded-sm px-[2px] ml-3'>3</span>
                        </span>
                    </li>
                </ul>

                <div className="flex items-center gap-2 flex-wrap">
                    <div className="flex items-center gap-2 p-3 w-full md:w-[179px] shadow-lg bg-white rounded-2xl">
                        <div className="relative w-10 h-10 rounded-full">
                            <Image
                            src="/userplaceholder1.svg"
                            alt="GreenBasket's Logo"
                            fill
                            className="object-contain rounded-full"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <p className='text-gray-600 text-xs'>Decision maker</p>
                            <p className='text-gray-700 text-sm font-semibold bg-gradient-to-r from-[#7c8ff6] via-[#5681b5] to-[#8e62ba] bg-clip-text text-transparent'>Yes</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 w-full md:w-[179px] shadow-md bg-white rounded-2xl">
                        <div className="relative w-10 h-10 rounded-full">
                            <Image
                            src="/userplaceholder1.svg"
                            alt="GreenBasket's Logo"
                            fill
                            className="object-contain rounded-full"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <p className='text-gray-600 text-xs'>Potential deal value</p>
                            <p className='text-gray-700 text-sm font-semibold bg-gradient-to-r from-[#7c8ff6] via-[#5681b5] to-[#8e62ba] bg-clip-text text-transparent'>$1M</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 w-full md:w-[179px] shadow-md bg-white rounded-2xl">
                        <div className="relative w-10 h-10 rounded-full">
                            <Image
                            src="/userplaceholder1.svg"
                            alt="GreenBasket's Logo"
                            fill
                            className="object-contain rounded-full"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="flex flex-col gap-1 ">
                            <p className='text-gray-600 text-xs'>Intent</p>
                            <p className='text-gray-700 text-sm font-semibold bg-gradient-to-r from-[#7c8ff6] via-[#5681b5] to-[#8e62ba] bg-clip-text text-transparent'>High</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center sm:justify-between flex-wrap gap-2 text-xs">
                <div className="flex items-center gap-1">
                    <button className='rounded-sm border border-gray-200 bg-gray-100'><SecurityOutlined style={{fontSize: '15px'}} /></button>
                    <div className='rounded-sm border bg-gray-100 flex items-center'>
                        <p className='border-r border-gray-200 px-1'>1</p>
                        <p className='px-1'><PieChart style={{fontSize: '15px', color: 'blue'}} /> D365 sales</p>
                    </div>
                    <button className='rounded-sm border border-gray-200 bg-gray-100 px-1'>+2</button>
                </div>
                <div className="flex text-xs items-center gap-2">
                    <span className='rounded-sm border border-gray-200 bg-gray-100 px-1'>AI generated content may be incorrect</span>
                    <button className='text-gray-500'><ThumbUpOutlined style={{fontSize: '15px'}} /></button>
                    <button className='text-gray-500'><ThumbDownOutlined style={{fontSize: '15px'}} /></button>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-2 bg-white py-3 px-4 rounded-lg shadow-xl">
            <div className="flex items-center justify-between">
                <p>About {lead.name}</p>
                <button className="w-6 h-6 p-2 flex items-center justify-center rounded-full hover:bg-gray-100 text-2xl" onClick={handlesalesLeadToggle}>{salesLeadOpen ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}</button>
            </div>
            {salesLeadOpen && 
            <p className='text-xs'>{lead.name}, the {lead.position} of {lead.at}, is a dynamic leader with a proven track record in operations and enhancing customer experiences. Under her guidance, {lead.at}&apos; in-store coffee shops have flourished, becoming a hall-mark of quality and innovation. {lead.name}&apos;s commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipments to elevate her coffee shops&apos; offerings, ensuring consistent, high-quality service.</p>
            }
        </div>
    </>
  )
}

export default EngageLead