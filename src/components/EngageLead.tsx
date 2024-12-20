import { KeyboardArrowDownOutlined, PieChart, SecurityOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'

const EngageLead = () => {
  return (
    <>
        <div className="flex flex-col gap-2 rounded-lg shadow-xl py-2 px-3 bg-white">
            <div className="flex flex-col w-full gap-2 rounded-xl p-3 bg-gradient-to-r from-[#5971fc0b] via-[#60a5fa0d] to-[#c084fc13]">
                <p className='text-xs font-semibold'>Why I picked this lead</p>
                
                <ul>
                    <li className='text-xs flex items-center gap-2'>
                        <p className='w-1 h-1 bg-gray-500 rounded-full'></p>
                        Jane is a <strong>key decision maker</strong> and was browsing <strong>&apos;espresson machines&apos;</strong> on First Coffee&apos;s website <span className='text-[8px] bg-white border rounded-sm px-[2px]'>1</span>
                    </li>
                    <li className='text-xs flex items-center gap-2'>
                        <p className='w-1 h-1 bg-gray-500 rounded-full'></p>
                        Multiple people at her company have reported &apos;slowness&apos; during <strong>service requests</strong> <span className='text-[8px] bg-white border rounded-sm px-[2px]'>2</span>
                    </li>
                    <li className='text-xs flex items-center gap-2'>
                        <p className='w-1 h-1 bg-gray-500 rounded-full'></p>
                        Northwind Traders currently see  <strong>$200M in revenue</strong> from their in-store coffee shops. <span className='text-[8px] bg-white border rounded-sm px-[2px]'>3</span>
                    </li>
                </ul>

                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 p-3 w-[179px] shadow-lg bg-white rounded-2xl">
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
                            <p className='text-gray-700 text-sm font-semibold'>Yes</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 w-[179px] shadow-md bg-white rounded-2xl">
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
                            <p className='text-gray-700 text-sm font-semibold'>$1M</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 w-[179px] shadow-md bg-white rounded-2xl">
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
                            <p className='text-gray-700 text-sm font-semibold'>High</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between text-xs">
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
                <p>About Jane</p>
                <KeyboardArrowDownOutlined style={{fontSize: '15px'}} />
            </div>
            <p className='text-xs'>Jane Reyes, the Chief Operating Officer of Northwind Traders, is a dynamic leader with a proven track record in operations and enhancing customer experiences. Under her guidance, Northwind Traders&apos; in-store coffee shops have flourished, becoming a hall-mark of quality and innovation. Jane&apos;s commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipments to elevate her coffee shops&apos; offerings, ensuring consistent, high-quality service.</p>
        </div>
    </>
  )
}

export default EngageLead