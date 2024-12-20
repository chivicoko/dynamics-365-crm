'use client';

import { leadModalProps } from '@/utils/types'
import { DirectionsRunOutlined, EditOutlined, EditRoadOutlined, FileCopyOutlined, KeyboardArrowDownOutlined, KeyboardArrowUpOutlined, LinkedIn, ListAltOutlined, MenuBookOutlined, Person3Outlined, Search, SendOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React, { useState } from 'react'
import EngageLead from './EngageLead';

const AgentSkillModal: React.FC<leadModalProps> = ({handleLeadToggle}) => {
    const [salesLeadOpen, setSalesLeadOpen] = useState(false);
    const [searchText, setSearchText] = useState<string>('');
    const [inputItems, setInputItems] = useState<string[]>([]);

    const handlesalesLeadToggle = () =>setSalesLeadOpen((prev) => !prev);

    const handleSubmit = () => {
        const inputItems = [];
        inputItems.push(searchText);
        console.log(inputItems);

        setInputItems(inputItems);
    }

  return (
    <div className="fixed inset-0 p-2 flex items-center justify-center bg-black bg-opacity-60 z-50">
        <div className="relative w-[52%] h-[88.5%] rounded-[20px] py-5 px-6 pt-8 bg-gradient-to-b from-white via-white to-[#eee9f5] shadow-xl flex flex-col justify-between text-gray-700">
            <div className='flex flex-col gap-4'>
                <button onClick={handleLeadToggle} className='mb-2 w-6 h-6 md:h-8 md:w-8 p-2 self-end flex items-center justify-center rounded-full hover:bg-gray-100 text-2xl md:text-3xl'>&times;</button>
                <p className='flex items-center gap-1 font-semibold'>✨ <span>Agent Skill</span></p>

                <div className="flex flex-col gap-5 rounded-lg shadow-md p-5 border-t border-gray-100">
                    <div className="w-full flex flex-col gap-3">
                        <div className="w-full flex items-center justify-between">
                            <p className='font-semibold'>Check if on-hand inventories will allow all sales orders to ship without delay</p>
                            <button onClick={handlesalesLeadToggle}>{salesLeadOpen ? <KeyboardArrowUpOutlined /> : <KeyboardArrowDownOutlined />}</button>
                        </div>

                        {salesLeadOpen && 
                        <div>
                            <p className='leading-loose'>When <span className='bg-blue-50 text-blue-400 py-1 px-3 rounded-full'><Person3Outlined style={{fontSize: '15px'}} /> any vendor</span> sends an email with changes 
                            to <span className='bg-blue-50 text-blue-400 py-1 px-3 rounded-full'><ListAltOutlined style={{fontSize: '15px'}} /> confirmed purchase orders</span>, 
                            checking if the resulting <span className='bg-blue-50 text-blue-400 py-1 px-3 rounded-full'><MenuBookOutlined style={{fontSize: '15px'}} /> on-hand inventory</span> will 
                            all <span className='bg-blue-50 text-blue-400 py-1 px-3 rounded-full'><FileCopyOutlined style={{fontSize: '15px'}} /> all sales orders</span> to <br />
                            <span className='bg-blue-50 text-blue-400 py-1 px-3 rounded-full'><DirectionsRunOutlined style={{fontSize: '15px'}} /> ship without delay</span>. If 
                            so, <span className='bg-blue-50 text-blue-400 py-1 px-3 rounded-full'><EditRoadOutlined style={{fontSize: '15px'}} /> update the purchase order</span> to reflect change.</p>
                        </div>
                        }
                    </div>
                </div>
                
                <div className="w-full flex flex-col gap-2 mt-6">
                    <div className="flex flex-col gap-3">
                        <p className='flex items-center gap-1 font-semibold'>📨 <span>Enable email access</span></p>
                        <p>Allow the agent to access the email inboxes to read mail from known vendors</p>
                        <div className="flex items-center gap-3">
                            <form onSubmit={handleSubmit} className='w-full flex items-center gap-2'>
                                <div className="px-2 border bg-white w-[80%] rounded-[5px] flex items-center justify-between">
                                    <div className='flex items-center rounded-full bg-gray-100 text-sm h-fit'>
                                        <span className="text-[#666666] mr-2 h-4 w-4 md:h-6 md:w-6 bg-red-100 flex items-center justify-center rounded-full">P</span>
                                        <span className="text-[#666666] border-r-2 border-gray-200 pr-2">purchasing@contoso.com</span>
                                        <button className="text-[#666666] text-2xl h-4 w-4 md:h-6 md:w-6 hover:bg-gray-200 flex items-center justify-center rounded-full font-light">&times;</button>
                                    </div>
                                    <input
                                        type="text"
                                        name="searchText"
                                        value={searchText}
                                        onChange={(e) => setSearchText(e.target.value)}
                                        className="bg-transparent w-full py-1 text-xs pl-1 focus:outline-0 placeholder:text-xs md:text-base text-gray-700 leading-tight"
                                    />
                                </div>
                                <button className='bg-blue-600 hover:bg-blue-700 text-white text-sm py-[6px] px-5 rounded-[5px]'>Allow access</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="self-end flex items-center gap-2">
                <button className='py-1 px-3 border-2 bg-gray-300 text-gray-400 rounded-[5px]'>Activate</button>
                <button onClick={handleLeadToggle} className='py-1 px-3 border-2 border-gray-400 rounded-[5px]'>Close</button>
            </div>
        </div>
    </div>
  )
}

export default AgentSkillModal